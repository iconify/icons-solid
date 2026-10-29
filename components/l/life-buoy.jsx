import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z74ruqb2d.css';
import '../../css/e/ez1y9lbuw.css';
import '../../css/v/vgcvvj6fo.css';
import '../../css/v/vpvf0vahn.css';
import '../../css/g/gzxncg8zj.css';
import '../../css/n/nmpq5acoo.css';
import '../../css/h/h5-ybjiiz.css';
import '../../css/o/otbytu4su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow z74ruqb2d"/><path class="ez1y9lbuw wm-k"/><path class="vgcvvj6fo wm-k"/><path class="vpvf0vahn wm-k"/><path class="gzxncg8zj wm-k"/><path class="nmpq5acoo wm-k"/><path class="h5-ybjiiz wm-shine"/><path class="otbytu4su wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:life-buoy"} {...others} />);
}

export default Component;
