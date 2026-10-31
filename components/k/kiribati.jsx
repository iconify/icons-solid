import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5yjr_spk.css';
import '../../css/p/p075md36j.css';
import '../../css/l/ldzer7b8d.css';
import '../../css/h/hz4bs5lpu.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="q5yjr_spk"/><path class="p075md36j"/><path class="ldzer7b8d"/><path class="hz4bs5lpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:kiribati"} {...others} />);
}

export default Component;
