import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au0ox3b3b.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="au0ox3b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-card-remix"} {...others} />);
}

export default Component;
