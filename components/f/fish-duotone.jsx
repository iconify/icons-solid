import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpszv2t0a.css';
import '../../css/z/zv7cqytgb.css';
import '../../css/f/f871idzby.css';
import '../../css/s/s5_swabos.css';
import '../../css/k/k0yolxb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hpszv2t0a"/><path class="zv7cqytgb"/><path class="f871idzby"/><path class="s5_swabos"/><path class="k0yolxb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fish-duotone"} {...others} />);
}

export default Component;
