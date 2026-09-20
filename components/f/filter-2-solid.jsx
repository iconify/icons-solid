import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etic5kuwz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="etic5kuwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:filter-2-solid"} {...others} />);
}

export default Component;
