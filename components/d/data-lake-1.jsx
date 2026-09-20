import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cqiib0buf.css';
import '../../css/z/zznh62lhy.css';
import '../../css/h/htt0u436l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="cqiib0buf"/><path class="zznh62lhy"/><path class="htt0u436l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-lake-1"} {...others} />);
}

export default Component;
