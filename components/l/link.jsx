import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gc2boyaow.css';
import '../../css/h/hdjukob5e.css';
import '../../css/j/j29qswboh.css';
import '../../css/t/tyqwhzeye.css';
import '../../css/z/z399qbk0b.css';
import '../../css/t/tovkw2bsv.css';
import '../../css/x/xn1124bpe.css';
import '../../css/o/o_caqwvof.css';
import '../../css/m/m3qe_6bul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gc2boyaow wm-shadow"/><path class="hdjukob5e wm-shadow"/><path class="j29qswboh"/><path class="tyqwhzeye"/><path class="z399qbk0b"/><path class="tovkw2bsv"/><path class="wm-shine xn1124bpe"/><path class="o_caqwvof wm-shine"/><path class="m3qe_6bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:link"} {...others} />);
}

export default Component;
