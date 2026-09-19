import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hn5acabjk.css';
import '../../css/f/fn3cb88kt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="hn5acabjk"/><path clip-rule="evenodd" class="fn3cb88kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:book"} {...others} />);
}

export default Component;
