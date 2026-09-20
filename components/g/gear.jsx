import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb_0-umdw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kb_0-umdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:gear"} {...others} />);
}

export default Component;
