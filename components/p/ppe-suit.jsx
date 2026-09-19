import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk_9v_7sz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fk_9v_7sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-suit"} {...others} />);
}

export default Component;
