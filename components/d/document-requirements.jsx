import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dybeleg8o.css';
import '../../css/l/lxih1s-hl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dybeleg8o"/><path class="lxih1s-hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-requirements"} {...others} />);
}

export default Component;
