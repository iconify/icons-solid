import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjnvd49sx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gjnvd49sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-using-terminal-kiosk-with-yen-yuan"} {...others} />);
}

export default Component;
