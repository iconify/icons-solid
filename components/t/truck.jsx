import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/o/o4ke3obnq.css';
import '../../css/u/ua5ldjbsh.css';
import '../../css/k/kv0y0ib6z.css';
import '../../css/h/hmjjl1bqf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="o4ke3obnq"/><path class="ua5ldjbsh"/><path class="kv0y0ib6z"/><path class="hmjjl1bqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:truck"} {...others} />);
}

export default Component;
