import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx04s3b6i.css';
import '../../css/l/lj1zwhbmu.css';
import '../../css/o/oktuhnbjm.css';
import '../../css/h/hlyt4m-0q.css';
import '../../css/q/qcl1j0bhb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lx04s3b6i"/><path class="lj1zwhbmu"/><path class="oktuhnbjm"/><path class="hlyt4m-0q"/><path class="qcl1j0bhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:baby-chick"} {...others} />);
}

export default Component;
