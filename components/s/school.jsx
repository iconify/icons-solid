import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jen_rgbes.css';
import '../../css/t/t-0thacvy.css';
import '../../css/a/a37vbsb7y.css';
import '../../css/o/oy3iqabzh.css';
import '../../css/v/vgxzr9bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jen_rgbes"/><path class="t-0thacvy"/><path class="a37vbsb7y"/><path class="oy3iqabzh"/><ellipse class="vgxzr9bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:school"} {...others} />);
}

export default Component;
