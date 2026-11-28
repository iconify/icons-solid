import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqjxz6b_b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ge9-hzgbc.css';
import '../../css/z/z2miv2tdx.css';
import '../../css/y/ygv_xwzqt.css';
import '../../css/r/ri1424bhc.css';
import '../../css/r/rpb665r-p.css';
import '../../css/a/a7j_831qc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vqjxz6b_b"/><g class="dt0cm9dhy primary"><path class="ge9-hzgbc"/><path class="z2miv2tdx"/><path class="ygv_xwzqt"/><path class="ri1424bhc"/><path class="rpb665r-p"/><path class="a7j_831qc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:syringe-duo"} {...others} />);
}

export default Component;
