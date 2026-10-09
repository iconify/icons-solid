import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/z/z7y60jb6r.css';
import '../../css/k/kx3gb1bry.css';
import '../../css/b/bq9c9o52d.css';
import '../../css/h/ha5pt1s6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="z7y60jb6r"/><path class="kx3gb1bry"/><path class="bq9c9o52d"/><path class="ha5pt1s6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:accessibility-48"} {...others} />);
}

export default Component;
