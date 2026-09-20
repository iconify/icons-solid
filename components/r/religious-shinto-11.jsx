import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_pr8ov3n.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="u_pr8ov3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:religious-shinto-11"} {...others} />);
}

export default Component;
