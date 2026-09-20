import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxqopmb4d.css';
import '../../css/c/cudv7nb2y.css';
import '../../css/m/m4h84gd5d.css';
import '../../css/z/zhlglab2q.css';
import '../../css/r/rukfmib0i.css';
import '../../css/g/g1guytrys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pxqopmb4d"><path class="cudv7nb2y"/><path class="m4h84gd5d"/><path class="zhlglab2q"/><path class="rukfmib0i"/><path class="g1guytrys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-work-wireless"} {...others} />);
}

export default Component;
