import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ngdz28sre.css';
import '../../css/d/dtndd7b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ngdz28sre"/><path class="dtndd7b-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-copy"} {...others} />);
}

export default Component;
