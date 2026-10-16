import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py9jq5b2b.css';
import '../../css/s/s_r_nw-gc.css';
import '../../css/z/z1fl5lrae.css';
import '../../css/c/cgo_eslee.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="py9jq5b2b"/><path class="s_r_nw-gc"/><path class="z1fl5lrae"/><path class="cgo_eslee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-search-20"} {...others} />);
}

export default Component;
