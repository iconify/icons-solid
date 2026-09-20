import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yuaib8bbv.css';
import '../../css/z/zz0udab_i.css';
import '../../css/d/dy_8-wb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yuaib8bbv"/><path class="zz0udab_i"/><path class="dy_8-wb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:receipt-tax"} {...others} />);
}

export default Component;
