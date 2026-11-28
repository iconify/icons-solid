import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehr5pjbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehr5pjbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:file-spreadsheet-x"} {...others} />);
}

export default Component;
