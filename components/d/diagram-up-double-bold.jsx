import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vupesl-hm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vupesl-hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-up-double-bold"} {...others} />);
}

export default Component;
