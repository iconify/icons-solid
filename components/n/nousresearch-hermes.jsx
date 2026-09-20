import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mp7d1bc8d.css';
import '../../css/q/qohtrw29d.css';
import '../../css/n/ndl2skddu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="mp7d1bc8d"/><path class="qohtrw29d"/><path clip-rule="evenodd" class="ndl2skddu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:nousresearch-hermes"} {...others} />);
}

export default Component;
