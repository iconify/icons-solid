import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k6ddl4-3y.css';
import '../../css/n/nqhv45btf.css';
import '../../css/o/ot1jgbxnf.css';
import '../../css/l/lxhs2bcmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k6ddl4-3y wm-shadow"/><path class="nqhv45btf"/><path class="ot1jgbxnf wm-s"/><path class="lxhs2bcmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:poinsettia"} {...others} />);
}

export default Component;
