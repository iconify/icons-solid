import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvtzdzbdn.css';
import '../../css/a/alhb85b0y.css';
import '../../css/r/r3bq5ybxj.css';
import '../../css/q/qdpsikbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="cvtzdzbdn"/><rect class="alhb85b0y"/><circle class="r3bq5ybxj"/><path class="qdpsikbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera2"} {...others} />);
}

export default Component;
