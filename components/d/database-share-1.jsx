import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_949kg-n.css';
import '../../css/c/cxy33t7do.css';
import '../../css/b/bgfpcoder.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k_949kg-n"/><path class="cxy33t7do"/><path class="bgfpcoder"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-share-1"} {...others} />);
}

export default Component;
