import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzwd2419d.css';
import '../../css/e/ememapmfa.css';
import '../../css/k/kpk6-xseb.css';
import '../../css/b/bwf4zybsp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lzwd2419d"/><path class="ememapmfa"/><path class="kpk6-xseb"/><path class="bwf4zybsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:baffled"} {...others} />);
}

export default Component;
