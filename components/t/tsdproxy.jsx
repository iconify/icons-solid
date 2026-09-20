import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl35fttde.css';
import '../../css/v/vv1q87bgh.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="yl35fttde"/><path class="vv1q87bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tsdproxy"} {...others} />);
}

export default Component;
