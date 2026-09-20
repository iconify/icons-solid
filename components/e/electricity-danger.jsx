import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6z4semhy.css';
import '../../css/b/brdkgxb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w6z4semhy"/><path class="brdkgxb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:electricity-danger"} {...others} />);
}

export default Component;
