import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvti8obbi.css';
import '../../css/b/b3xofpbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pvti8obbi"/><path class="b3xofpbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tree"} {...others} />);
}

export default Component;
