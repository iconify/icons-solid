import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee5qn39ja.css';
import '../../css/x/xtdg8acli.css';
import '../../css/q/qpgj4lbdo.css';
import '../../css/m/m-vsgb6ld.css';
import '../../css/i/ir18eqg5j.css';
import '../../css/e/eubwl75-q.css';
import '../../css/g/g-w7kccyl.css';

const viewBox = {"width":178.667,"height":55.037,"left":110.667,"top":172.481};
const content = `<path class="ee5qn39ja"/><path class="xtdg8acli"/><path class="qpgj4lbdo"/><path class="m-vsgb6ld"/><path class="ir18eqg5j"/><path class="eubwl75-q"/><path class="g-w7kccyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:peacock"} {...others} />);
}

export default Component;
