import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mt0lb0buk.css';
import '../../css/c/chrfd_blk.css';
import '../../css/c/cmb_s9nah.css';
import '../../css/d/dktcg2bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="mt0lb0buk"/><path class="chrfd_blk"/><path class="cmb_s9nah"/><path class="dktcg2bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:gem"} {...others} />);
}

export default Component;
