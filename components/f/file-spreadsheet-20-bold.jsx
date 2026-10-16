import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq8br0b3r.css';
import '../../css/j/j_qqxg8nr.css';
import '../../css/p/ptgjsdbfb.css';
import '../../css/k/k_sb-9bog.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bq8br0b3r"/><path class="j_qqxg8nr"/><path class="ptgjsdbfb"/><path class="k_sb-9bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-spreadsheet-20-bold"} {...others} />);
}

export default Component;
