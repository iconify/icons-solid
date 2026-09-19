import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6-_cry7c.css';
import '../../css/m/mhc-lebus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer p6-_cry7c"/><path class="duoicon-secondary-layer mhc-lebus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:lamp"} {...others} />);
}

export default Component;
