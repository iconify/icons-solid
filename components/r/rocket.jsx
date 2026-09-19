import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv29rccow.css';
import '../../css/y/yz7t0mb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer iv29rccow"/><path class="duoicon-primary-layer yz7t0mb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:rocket"} {...others} />);
}

export default Component;
