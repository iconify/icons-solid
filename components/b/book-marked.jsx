import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a60xp4oqv.css';
import '../../css/p/pbu-i6a_p.css';
import '../../css/u/uq9lept4c.css';
import '../../css/s/sd8c99xsb.css';
import '../../css/o/oyz4zob1e.css';
import '../../css/l/l0v2o1xjs.css';
import '../../css/l/lexorqofk.css';
import '../../css/t/tmoi89bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a60xp4oqv wm-shadow"/><path class="pbu-i6a_p wm-k"/><path class="uq9lept4c wm-k"/><path class="sd8c99xsb wm-k"/><path class="oyz4zob1e wm-k"/><path class="l0v2o1xjs wm-k"/><path class="lexorqofk wm-shine"/><path class="tmoi89bdj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:book-marked"} {...others} />);
}

export default Component;
