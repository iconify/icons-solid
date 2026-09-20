import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sehyrpkys.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="sehyrpkys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-delete-2-remove-bold-add-button-buttons-delete"} {...others} />);
}

export default Component;
