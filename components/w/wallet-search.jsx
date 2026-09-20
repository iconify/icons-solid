import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/crmmipbgc.css';
import '../../css/g/g3wbqrbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="crmmipbgc"/><path class="g3wbqrbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-search"} {...others} />);
}

export default Component;
