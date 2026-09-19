import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy_h3mg2o.css';
import '../../css/t/t_zwr_bwh.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="sy_h3mg2o"/><path transform="scale(.79012 .88889)" class="t_zwr_bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:es-ct-4x3"} {...others} />);
}

export default Component;
