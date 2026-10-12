import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsp7zgb3m.css';
import '../../css/w/wo7e92b0f.css';
import '../../css/m/min81mbjh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fsp7zgb3m"/><path class="wo7e92b0f"/><path class="min81mbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dna-20-bold"} {...others} />);
}

export default Component;
