import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usuimpbio.css';
import '../../css/i/i5007011u.css';
import '../../css/m/mh0n59bar.css';
import '../../css/g/gyydhabtl.css';
import '../../css/t/tkbog5bpr.css';
import '../../css/j/j--d0i75f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="usuimpbio"/><path class="i5007011u"/><path class="mh0n59bar"/><path class="gyydhabtl"/><path class="tkbog5bpr"/><path class="j--d0i75f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-containers-lxc"} {...others} />);
}

export default Component;
