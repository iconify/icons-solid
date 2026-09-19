import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq4jlwbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mq4jlwbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:circles-seven"} {...others} />);
}

export default Component;
