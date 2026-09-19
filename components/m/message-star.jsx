import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6lfs7i_j.css';
import '../../css/n/n-t7iwbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6lfs7i_j"/><path class="n-t7iwbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-star"} {...others} />);
}

export default Component;
