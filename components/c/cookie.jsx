import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwzrj2bfe.css';
import '../../css/p/p-kj71bio.css';
import '../../css/k/kq09bbcps.css';
import '../../css/m/m--kjgbhl.css';
import '../../css/j/job9ntnfc.css';
import '../../css/r/r9sxh0jlf.css';
import '../../css/i/irkzuzgre.css';
import '../../css/a/aluwocc8h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kwzrj2bfe"/><path class="p-kj71bio"/><path class="kq09bbcps"/><path class="m--kjgbhl"/><path class="job9ntnfc"/><path class="r9sxh0jlf"/><path class="irkzuzgre"/><path class="aluwocc8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:cookie"} {...others} />);
}

export default Component;
