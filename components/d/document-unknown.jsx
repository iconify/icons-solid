import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euy7x3bzx.css';
import '../../css/c/c7zalxt4x.css';
import '../../css/l/la19u4bbi.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="euy7x3bzx"/><path class="c7zalxt4x"/><path class="la19u4bbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-unknown"} {...others} />);
}

export default Component;
