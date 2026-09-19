import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj_clkr6u.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bj_clkr6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:arrows-expand"} {...others} />);
}

export default Component;
