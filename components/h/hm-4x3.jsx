import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sviq3zu_k.css';
import '../../css/s/se8vs5b7y.css';
import '../../css/n/nxsnulbfm.css';
import '../../css/f/fdcwgl2hr.css';
import '../../css/r/r928t8uah.css';
import '../../css/a/aod_1-bwr.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="sviq3zu_k"/><path class="se8vs5b7y"/><path class="nxsnulbfm"/><path class="fdcwgl2hr"/><path class="r928t8uah"/><path class="aod_1-bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:hm-4x3"} {...others} />);
}

export default Component;
