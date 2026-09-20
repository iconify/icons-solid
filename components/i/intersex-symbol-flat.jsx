import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-nn22bjc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h-nn22bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:intersex-symbol-flat"} {...others} />);
}

export default Component;
