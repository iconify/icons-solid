import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmr0mfb7i.css';
import '../../css/v/vry7vqb6d.css';
import '../../css/s/s4v3_kbwn.css';
import '../../css/o/o704_4a0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hmr0mfb7i"/><path class="vry7vqb6d"/><path class="s4v3_kbwn"/><path class="o704_4a0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dentistry-tooth"} {...others} />);
}

export default Component;
