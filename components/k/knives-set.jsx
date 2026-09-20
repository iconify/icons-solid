import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z1azhwbhy.css';
import '../../css/v/vh0j1jbmm.css';
import '../../css/e/en0ezkbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z1azhwbhy"/><path class="vh0j1jbmm"/><path class="en0ezkbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:knives-set"} {...others} />);
}

export default Component;
