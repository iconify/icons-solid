import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5n1dclep.css';
import '../../css/h/hy57-wdqb.css';
import '../../css/l/l6fq0ni7g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5n1dclep"/><path class="hy57-wdqb"/><path class="l6fq0ni7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:friedshrimp"} {...others} />);
}

export default Component;
