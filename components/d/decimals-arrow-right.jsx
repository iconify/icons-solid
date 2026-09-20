import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8wdw2bdw.css';
import '../../css/g/gmcwwh2ne.css';
import '../../css/v/vwqq62bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d8wdw2bdw"/><rect class="gmcwwh2ne"/><rect class="vwqq62bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:decimals-arrow-right"} {...others} />);
}

export default Component;
