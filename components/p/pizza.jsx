import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0c984pim.css';
import '../../css/m/mx8cflbpk.css';
import '../../css/s/st_vpibnd.css';
import '../../css/r/rnu459yuh.css';
import '../../css/y/yw5adbbwl.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/a58n3hbok.css';
import '../../css/k/k0n7udb8i.css';
import '../../css/i/i44iu5b8g.css';
import '../../css/f/f2rubz4qf.css';
import '../../css/o/obhi90bhn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o0c984pim"/><path class="mx8cflbpk"/><circle class="st_vpibnd"/><circle class="rnu459yuh"/><circle class="yw5adbbwl"/><g class="ij2x_72vy"><path class="a58n3hbok"/><path class="k0n7udb8i"/><circle class="i44iu5b8g"/><circle class="f2rubz4qf"/><circle class="obhi90bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pizza"} {...others} />);
}

export default Component;
