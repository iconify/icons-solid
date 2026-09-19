import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kz9ilmb3v.css';
import '../../css/t/t5qt9rgnk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="kz9ilmb3v"/><path class="t5qt9rgnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:insert-card"} {...others} />);
}

export default Component;
