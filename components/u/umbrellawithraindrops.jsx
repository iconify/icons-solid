import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d48rwrbwp.css';
import '../../css/y/y07zc7bzu.css';
import '../../css/o/ogpjvqoww.css';
import '../../css/p/p6uefcc2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d48rwrbwp"/><path class="y07zc7bzu"/><path class="ogpjvqoww"/><path class="p6uefcc2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:umbrellawithraindrops"} {...others} />);
}

export default Component;
