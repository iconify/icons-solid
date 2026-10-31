import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pmxzqzl_o.css';
import '../../css/k/ky36n5bjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="pmxzqzl_o"/><path class="ky36n5bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:theme-auto"} {...others} />);
}

export default Component;
