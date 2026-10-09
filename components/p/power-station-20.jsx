import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsoei1ajq.css';
import '../../css/w/waz_2hbmd.css';
import '../../css/w/wgvzgybih.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tsoei1ajq"/><path class="waz_2hbmd"/><path class="wgvzgybih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-station-20"} {...others} />);
}

export default Component;
