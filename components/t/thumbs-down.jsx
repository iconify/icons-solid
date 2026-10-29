import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn5gi5bef.css';
import '../../css/q/qeqbbysjd.css';
import '../../css/c/clx7f-b2h.css';
import '../../css/j/jyx2lbyqf.css';
import '../../css/a/axj8e7bzl.css';
import '../../css/l/luuk7nb_d.css';
import '../../css/u/utmg4-bgi.css';
import '../../css/z/zgmmv_bpo.css';
import '../../css/q/qnd7ooble.css';
import '../../css/v/v8f9iirsn.css';
import '../../css/t/twxd04bik.css';
import '../../css/d/d1ggz187i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mn5gi5bef wm-shadow"/><path class="qeqbbysjd wm-k"/><path class="clx7f-b2h wm-k"/><path class="jyx2lbyqf wm-k"/><path class="axj8e7bzl wm-k"/><path class="luuk7nb_d wm-shine"/><path class="utmg4-bgi wm-k"/><path class="wm-a zgmmv_bpo"/><path class="qnd7ooble wm-a"/><path class="v8f9iirsn wm-a"/><path class="twxd04bik wm-a"/><path class="d1ggz187i wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:thumbs-down"} {...others} />);
}

export default Component;
