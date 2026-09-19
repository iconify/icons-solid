import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/ch7leyxhy.css';
import '../../css/z/zli5stb1l.css';
import '../../css/w/w22fc006e.css';
import '../../css/a/a4sjd5ble.css';
import '../../css/l/ldfti25-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="ch7leyxhy"/><path class="zli5stb1l"/><path class="w22fc006e"/><path class="a4sjd5ble"/><rect class="ldfti25-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:seo"} {...others} />);
}

export default Component;
