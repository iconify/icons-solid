import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9m4xgb3u.css';
import '../../css/f/fbt2ffbmg.css';
import '../../css/r/roslnzb2d.css';
import '../../css/g/gh10ve00x.css';
import '../../css/h/h4j_a1xza.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="h9m4xgb3u"/><path class="fbt2ffbmg"/><path class="roslnzb2d"/><path class="gh10ve00x"/><path class="h4j_a1xza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:western-sahara"} {...others} />);
}

export default Component;
