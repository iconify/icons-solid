import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipkul0x-y.css';
import '../../css/k/kprce0ijz.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ipkul0x-y"/><path class="kprce0ijz"/><path class="x8r3bo3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-enrichment-add"} {...others} />);
}

export default Component;
