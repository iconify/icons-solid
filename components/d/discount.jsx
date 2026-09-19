import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by7gwpbho.css';
import '../../css/p/pnb1asb2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by7gwpbho duoicon-secondary-layer"/><path class="duoicon-primary-layer pnb1asb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:discount"} {...others} />);
}

export default Component;
