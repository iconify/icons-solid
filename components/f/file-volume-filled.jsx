import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5jau6bgw.css';
import '../../css/j/j22w93are.css';
import '../../css/p/pndt6mbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5jau6bgw"/><path class="j22w93are"/><path class="pndt6mbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-volume-filled"} {...others} />);
}

export default Component;
