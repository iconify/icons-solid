import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bsoq4zgli.css';
import '../../css/i/iqv0xnyvl.css';
import '../../css/d/d3nxyvb1i.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bsoq4zgli"/><path class="iqv0xnyvl"/><path class="d3nxyvb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:milkshake-flat"} {...others} />);
}

export default Component;
