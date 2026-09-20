import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgm_8n2wb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgm_8n2wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:piechart-ai-filled"} {...others} />);
}

export default Component;
