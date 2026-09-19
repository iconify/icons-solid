import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/l48_gxbpf.css';
import '../../css/e/eudf6wb8v.css';
import '../../css/z/zmtvx6byk.css';
import '../../css/l/l3k_n4b-t.css';
import '../../css/m/m1341bv4j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7VbSueik"><g class="s9cl3zbei"><path clip-rule="evenodd" class="l48_gxbpf"/><path class="eudf6wb8v"/><path class="zmtvx6byk"/><path class="l3k_n4b-t"/><path class="m1341bv4j"/></g></mask></defs><path mask="url(#SVG7VbSueik)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pyramid-one"} {...others} />);
}

export default Component;
