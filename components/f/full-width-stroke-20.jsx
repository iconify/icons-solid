import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdp3vsbnw.css';
import '../../css/a/aqnztv02g.css';
import '../../css/p/pur2tt30n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xdp3vsbnw"/><path class="aqnztv02g"/><path class="pur2tt30n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:full-width-stroke-20"} {...others} />);
}

export default Component;
