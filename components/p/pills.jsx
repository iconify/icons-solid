import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltf0sebud.css';
import '../../css/a/ahpr7q3lo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ltf0sebud"/><path class="ahpr7q3lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:pills"} {...others} />);
}

export default Component;
