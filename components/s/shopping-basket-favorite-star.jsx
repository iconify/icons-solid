import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xbl_6z5is.css';
import '../../css/x/xr8dqy-os.css';
import '../../css/d/df7uwvexg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xbl_6z5is"/><path class="xr8dqy-os"/><path class="df7uwvexg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-basket-favorite-star"} {...others} />);
}

export default Component;
