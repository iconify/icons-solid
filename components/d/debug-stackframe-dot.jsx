import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts_6gkbtt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ts_6gkbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-stackframe-dot"} {...others} />);
}

export default Component;
