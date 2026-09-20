import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-b3x68wo.css';
import '../../css/v/v13v6sbxw.css';
import '../../css/s/sofkstbqc.css';
import '../../css/k/kita399ds.css';
import '../../css/m/m6dl00b2g.css';
import '../../css/t/tiyskhbsy.css';
import '../../css/t/tpptrjtkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e-b3x68wo"/><path class="v13v6sbxw"/><path class="sofkstbqc"/><path class="kita399ds"/><path class="m6dl00b2g"/><path class="tiyskhbsy"/><path class="tpptrjtkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:animal-products-egg"} {...others} />);
}

export default Component;
