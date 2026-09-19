import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul-fvud4v.css';
import '../../css/j/jvhn8ub7u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ul-fvud4v"/><path class="jvhn8ub7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:wineglass"} {...others} />);
}

export default Component;
