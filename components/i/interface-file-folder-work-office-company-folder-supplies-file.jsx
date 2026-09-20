import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nis8-pwmr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nis8-pwmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-folder-work-office-company-folder-supplies-file"} {...others} />);
}

export default Component;
