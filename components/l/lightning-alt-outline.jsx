import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnn96f57y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qnn96f57y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:lightning-alt-outline"} {...others} />);
}

export default Component;
