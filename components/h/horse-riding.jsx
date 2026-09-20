import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrau_yivg.css';
import '../../css/t/ttfqnbbod.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/k/keer2o91a.css';
import '../../css/o/oydgvjb4r.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/y/y9i0ofb8i.css';
import '../../css/k/kk630ok5b.css';
import '../../css/j/j35u7bc8r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mrau_yivg"/><path class="ttfqnbbod"/><g class="x4u8pbwjc"><circle class="keer2o91a"/><path class="oydgvjb4r"/></g><g class="x8poo_bjf"><circle class="keer2o91a"/><path class="y9i0ofb8i"/><path class="kk630ok5b"/><path class="j35u7bc8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:horse-riding"} {...others} />);
}

export default Component;
