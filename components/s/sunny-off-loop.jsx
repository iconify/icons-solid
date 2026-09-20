import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/m/mo0t0x.css';
import '../../css/z/zxndow.css';
import '../../css/j/j42pvv.css';
import '../../css/c/cya-tk.css';
import '../../css/y/ye8w3a.css';
import '../../css/b/botfzx.css';
import '../../css/v/vyro_l.css';
import '../../css/s/so-from-34.css';
import '../../css/t/tr-2c6-rw.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-jqytza.css';
import '../../css/d/d-qnzcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGH0G6mbpm"><path class="c5xdmn mo0t0x zxndow"/><path class="c5xdmn j42pvv zxndow"/><path class="c5xdmn cya-tk zxndow"/><path class="c5xdmn ye8w3a"/></mask></defs><path mask="url(#SVGH0G6mbpm)" class="botfzx"/><path class="c5xdmn vyro_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sunny-off-loop"} {...others} />);
}

export default Component;
