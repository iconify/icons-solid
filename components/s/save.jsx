import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnkim_jww.css';
import '../../css/w/wjg491cmr.css';
import '../../css/p/pl4wavb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bnkim_jww"/><path class="wjg491cmr"/><path class="pl4wavb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:save"} {...others} />);
}

export default Component;
