import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw3ytlbiz.css';
import '../../css/d/dlp46-bmq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rw3ytlbiz"/><path class="dlp46-bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:progressbar"} {...others} />);
}

export default Component;
