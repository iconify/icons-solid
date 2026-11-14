import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/y/y23revbym.css';
import '../../css/x/xny7ahbyj.css';
import '../../css/h/hg7iuofvt.css';
import '../../css/z/z24xhdb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="m4l-9ybuj"/><circle class="y23revbym"/><circle class="xny7ahbyj"/><circle class="hg7iuofvt"/><path class="z24xhdb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-type-1"} {...others} />);
}

export default Component;
