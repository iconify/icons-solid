import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozeyqcctf.css';
import '../../css/p/paymb2lad.css';
import '../../css/f/fmnfphbvx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ozeyqcctf"/><path class="paymb2lad"/><path class="fmnfphbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:puppeteer"} {...others} />);
}

export default Component;
