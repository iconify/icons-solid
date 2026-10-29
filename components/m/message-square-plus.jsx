import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9pes3pfz.css';
import '../../css/v/vw70i7bpf.css';
import '../../css/m/mpi005b2o.css';
import '../../css/f/fdzkzgn1t.css';
import '../../css/g/g4gc7cbku.css';
import '../../css/h/haryqyb9z.css';
import '../../css/w/wqxr__b3r.css';
import '../../css/j/j7zg8sb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y9pes3pfz"/><path class="vw70i7bpf wm-k"/><path class="mpi005b2o wm-k"/><path class="fdzkzgn1t wm-k"/><path class="g4gc7cbku wm-k"/><path class="haryqyb9z wm-k"/><path class="wm-shine wqxr__b3r"/><path class="j7zg8sb6l wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:message-square-plus"} {...others} />);
}

export default Component;
