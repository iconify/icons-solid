import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o4rrtjy8t.css';
import '../../css/s/shsv6jf9d.css';
import '../../css/k/kzg4mu6bx.css';
import '../../css/j/jfgyg0bcp.css';
import '../../css/i/ituzftp6q.css';
import '../../css/u/ue7czab5f.css';
import '../../css/o/oh1sw5rql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="o4rrtjy8t wm-shadow"/><path class="shsv6jf9d"/><path class="kzg4mu6bx"/><path class="jfgyg0bcp"/><path class="ituzftp6q wm-shine"/><path class="ue7czab5f wm-deco"/><path class="oh1sw5rql wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:credit-card"} {...others} />);
}

export default Component;
