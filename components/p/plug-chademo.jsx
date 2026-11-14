import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/k/kggx_phcw.css';
import '../../css/o/ok5s3mbwt.css';
import '../../css/y/yczpdobla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="m4l-9ybuj"/><circle class="kggx_phcw"/><circle class="ok5s3mbwt"/><path class="yczpdobla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-chademo"} {...others} />);
}

export default Component;
