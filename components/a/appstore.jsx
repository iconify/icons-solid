import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjoy21biv.css';
import '../../css/m/m126krlgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjoy21biv duoicon-secondary-layer"/><path class="duoicon-primary-layer m126krlgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:appstore"} {...others} />);
}

export default Component;
