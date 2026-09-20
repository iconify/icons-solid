import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/athpgtb-r.css';
import '../../css/c/c8ckl6cne.css';
import '../../css/f/f7joismne.css';

const viewBox = {"width":24,"height":24};
const content = `<circle cy="12" class="athpgtb-r"><animate id="SVGKiXXedfO" attributeName="cy" begin="0;SVGgLulOGrw.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cy="12" class="c8ckl6cne"><animate attributeName="cy" begin="SVGKiXXedfO.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cy="12" class="f7joismne"><animate id="SVGgLulOGrw" attributeName="cy" begin="SVGKiXXedfO.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"svg-spinners:3-dots-bounce"} {...others} />);
}

export default Component;
