import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_3e1wbvg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="e_3e1wbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:file-delete-alternate-solid"} {...others} />);
}

export default Component;
