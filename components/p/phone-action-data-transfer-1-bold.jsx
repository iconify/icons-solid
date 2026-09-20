import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m51kbubxl.css';
import '../../css/e/ejnjdobnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m51kbubxl"/><path class="ejnjdobnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-action-data-transfer-1-bold"} {...others} />);
}

export default Component;
