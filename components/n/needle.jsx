import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lq0t2kc3i.css';
import '../../css/x/x9x8z7zsn.css';
import '../../css/z/zcgug9b-t.css';
import '../../css/w/woff6o3ry.css';
import '../../css/c/c2mf5ccrl.css';
import '../../css/p/pllf7xbyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="lq0t2kc3i"/><path class="x9x8z7zsn"/><path class="zcgug9b-t"/><path class="woff6o3ry"/><path class="c2mf5ccrl"/><path class="pllf7xbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:needle"} {...others} />);
}

export default Component;
