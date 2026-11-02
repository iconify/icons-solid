import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d94hp_bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d94hp_bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-spreadsheet-line"} {...others} />);
}

export default Component;
