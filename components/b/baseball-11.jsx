import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckf6p_b0z.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="ckf6p_b0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:baseball-11"} {...others} />);
}

export default Component;
