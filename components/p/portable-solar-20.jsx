import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xshrh9bfm.css';
import '../../css/d/dndnoxzim.css';
import '../../css/b/bjc55qb5x.css';
import '../../css/k/km_en3cdb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xshrh9bfm"/><path class="dndnoxzim"/><path class="bjc55qb5x"/><path class="km_en3cdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:portable-solar-20"} {...others} />);
}

export default Component;
