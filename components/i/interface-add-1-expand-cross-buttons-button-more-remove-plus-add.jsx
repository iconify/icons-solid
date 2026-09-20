import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me-v67brs.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="me-v67brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add"} {...others} />);
}

export default Component;
