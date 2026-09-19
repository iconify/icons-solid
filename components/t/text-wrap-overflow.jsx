import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gzebls86q.css';
import '../../css/v/vuampqbsn.css';
import '../../css/l/lr-uxlbnw.css';
import '../../css/l/lfj1sdbtj.css';
import '../../css/b/b29kr7l6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="gzebls86q"/><path class="vuampqbsn"/><path class="lr-uxlbnw"/><path class="lfj1sdbtj"/><path class="b29kr7l6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-wrap-overflow"} {...others} />);
}

export default Component;
