import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/dyaf68bbe.css';
import '../../css/z/zk794xbdr.css';
import '../../css/s/suau6bcmm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="dyaf68bbe"/><circle class="zk794xbdr"/><path class="suau6bcmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rocket-one"} {...others} />);
}

export default Component;
