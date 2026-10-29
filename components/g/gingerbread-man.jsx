import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxcg6hb8u.css';
import '../../css/f/fam4yj87x.css';
import '../../css/k/k0m3vq6il.css';
import '../../css/g/gubj8whoo.css';
import '../../css/m/mexar3-6a.css';
import '../../css/a/akaor-4-y.css';
import '../../css/d/dezc9zcvw.css';
import '../../css/g/gr-0-jbwn.css';
import '../../css/r/r8qdvvbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxcg6hb8u wm-shadow"/><path class="fam4yj87x wm-k"/><path class="k0m3vq6il wm-k"/><path class="gubj8whoo wm-k"/><path class="mexar3-6a wm-k"/><path class="akaor-4-y wm-k"/><path class="dezc9zcvw wm-shine"/><path class="gr-0-jbwn wm-k"/><path class="r8qdvvbxp wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:gingerbread-man"} {...others} />);
}

export default Component;
