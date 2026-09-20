import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y73vvr34y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y73vvr34y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-outline"} {...others} />);
}

export default Component;
