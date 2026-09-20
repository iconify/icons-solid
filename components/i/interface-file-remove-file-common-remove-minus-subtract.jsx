import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd89idvdg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xd89idvdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-remove-file-common-remove-minus-subtract"} {...others} />);
}

export default Component;
