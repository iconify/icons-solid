import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og-vwh8xj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="og-vwh8xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:input-box-solid"} {...others} />);
}

export default Component;
