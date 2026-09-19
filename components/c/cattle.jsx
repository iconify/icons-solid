import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kucdc6bmn.css';
import '../../css/y/yjyzo-yuz.css';
import '../../css/v/v0vr5bb3r.css';
import '../../css/h/hva87d85b.css';
import '../../css/o/od82ajbyw.css';
import '../../css/f/fimjscbhk.css';
import '../../css/e/ekm0fobnv.css';
import '../../css/m/m07ja29bs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kucdc6bmn"/><path class="yjyzo-yuz"/><circle class="v0vr5bb3r"/><circle class="hva87d85b"/><circle class="od82ajbyw"/><circle class="fimjscbhk"/><path class="ekm0fobnv"/><path class="m07ja29bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cattle"} {...others} />);
}

export default Component;
