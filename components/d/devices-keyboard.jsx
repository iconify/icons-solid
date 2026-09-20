import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdy8dbcsx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qdy8dbcsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-keyboard"} {...others} />);
}

export default Component;
