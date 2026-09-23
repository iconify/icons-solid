import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oui1tdodu.css';
import '../../css/y/yqe6_cdnh.css';
import '../../css/y/yw7siy1-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oui1tdodu"/><path class="yqe6_cdnh"/><path class="yw7siy1-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sparkles"} {...others} />);
}

export default Component;
