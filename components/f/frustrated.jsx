import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrm12vbtq.css';
import '../../css/u/u0pfqpqvf.css';
import '../../css/j/jgu3w162i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yrm12vbtq"/><path class="u0pfqpqvf"/><path class="jgu3w162i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:frustrated"} {...others} />);
}

export default Component;
