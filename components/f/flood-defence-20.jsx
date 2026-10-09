import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laitt1gtv.css';
import '../../css/t/tqdr_mbdb.css';
import '../../css/k/k153fdm9a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="laitt1gtv"/><path class="tqdr_mbdb"/><path class="k153fdm9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flood-defence-20"} {...others} />);
}

export default Component;
