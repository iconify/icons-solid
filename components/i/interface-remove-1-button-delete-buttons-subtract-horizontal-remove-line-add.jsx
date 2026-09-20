import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n34sis0pu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n34sis0pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-remove-1-button-delete-buttons-subtract-horizontal-remove-line-add"} {...others} />);
}

export default Component;
