import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x68y6ab4a.css';
import '../../css/m/mgz8c9b8i.css';
import '../../css/u/u07nh0bbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer x68y6ab4a"/><path class="duoicon-primary-layer mgz8c9b8i"/><path class="duoicon-secondary-layer u07nh0bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:battery"} {...others} />);
}

export default Component;
