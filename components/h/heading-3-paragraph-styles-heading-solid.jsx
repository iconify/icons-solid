import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgpeuj9ub.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="qgpeuj9ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:heading-3-paragraph-styles-heading-solid"} {...others} />);
}

export default Component;
