import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asflqznoh.css';
import '../../css/j/jrtvxenjx.css';
import '../../css/y/yqp43ie7o.css';
import '../../css/t/txrek-rdq.css';
import '../../css/s/snd0mccfa.css';

const viewBox = {"width":30,"height":30};
const content = `<g class="asflqznoh"><path class="jrtvxenjx"/><path class="yqp43ie7o"/><path class="txrek-rdq"/><path class="snd0mccfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:stylable"} {...others} />);
}

export default Component;
