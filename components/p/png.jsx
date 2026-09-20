import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijt2-hgvq.css';
import '../../css/l/lojifgbsh.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ijt2-hgvq"/><path class="lojifgbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:png"} {...others} />);
}

export default Component;
