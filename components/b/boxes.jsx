import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/y/yd6xyscff.css';
import '../../css/p/ppdb-46ij.css';
import '../../css/o/ob-stir9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="yd6xyscff"/><path class="ppdb-46ij"/><path class="ob-stir9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:boxes"} {...others} />);
}

export default Component;
