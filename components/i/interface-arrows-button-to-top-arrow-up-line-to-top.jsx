import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etuvs-83s.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="etuvs-83s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-button-to-top-arrow-up-line-to-top"} {...others} />);
}

export default Component;
