import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/g/gvdfs39sj.css';
import '../../css/q/qnm012b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="gvdfs39sj"/><path class="qnm012b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:prescription-pills-drugs-healthcare"} {...others} />);
}

export default Component;
