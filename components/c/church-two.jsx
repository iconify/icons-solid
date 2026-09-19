import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/n/nkc9dzbgd.css';
import '../../css/y/y3ph28bwi.css';
import '../../css/j/jkh8i6b9q.css';
import '../../css/y/yj-zoacuo.css';
import '../../css/h/hvlqumljk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="nkc9dzbgd"/><path class="y3ph28bwi"/><path class="jkh8i6b9q"/><path class="yj-zoacuo"/><path class="hvlqumljk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:church-two"} {...others} />);
}

export default Component;
