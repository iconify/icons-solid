import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udwer-bvl.css';
import '../../css/j/jcdaq3bjh.css';
import '../../css/a/a4d54xg-r.css';
import '../../css/d/du3a-kbxd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="udwer-bvl"/><path class="jcdaq3bjh"/><path class="a4d54xg-r"/><path class="du3a-kbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crutch-48-bold"} {...others} />);
}

export default Component;
