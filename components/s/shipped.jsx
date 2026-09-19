import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv66htbvj.css';
import '../../css/z/zpzz0bbgx.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/p/p22345b7z.css';
import '../../css/w/wsp-wtbnv.css';
import '../../css/d/dqit34bqk.css';
import '../../css/d/d3yoq30ex.css';
import '../../css/y/yk96pybgg.css';
import '../../css/r/ryfflox1k.css';
import '../../css/v/vzsdzqbhm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tv66htbvj"/><path class="zpzz0bbgx"/><g class="bvkc79bpm"><circle class="p22345b7z"/><circle class="wsp-wtbnv"/></g><g class="dqit34bqk"><circle class="d3yoq30ex"/><circle class="yk96pybgg"/></g><path class="ryfflox1k"/><path class="vzsdzqbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:shipped"} {...others} />);
}

export default Component;
