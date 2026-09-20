import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp_bqbcum.css';
import '../../css/s/s9t-vws4d.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vp_bqbcum"/><path class="s9t-vws4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sive"} {...others} />);
}

export default Component;
