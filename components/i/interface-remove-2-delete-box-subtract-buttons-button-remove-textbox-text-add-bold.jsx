import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuik6ebaw.css';

const viewBox = {"width":14,"height":14};
const content = `<rect class="iuik6ebaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-remove-2-delete-box-subtract-buttons-button-remove-textbox-text-add-bold"} {...others} />);
}

export default Component;
