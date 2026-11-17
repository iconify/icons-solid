import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zaffh1bwb.css';
import '../../css/t/t6ehjqagz.css';
import '../../css/j/jutwg48hp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="zaffh1bwb"/><path class="t6ehjqagz"/><path class="jutwg48hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-search"} {...others} />);
}

export default Component;
