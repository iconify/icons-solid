import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h5zcsbbql.css';
import '../../css/r/rezumnbfj.css';
import '../../css/p/pizftqu3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="h5zcsbbql"/><path class="rezumnbfj"/><path class="pizftqu3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thunderbolt"} {...others} />);
}

export default Component;
