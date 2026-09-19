import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lou9a14vc.css';
import '../../css/j/j2bufmatg.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="lou9a14vc"/><rect class="j2bufmatg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-pdf-stroke-12"} {...others} />);
}

export default Component;
