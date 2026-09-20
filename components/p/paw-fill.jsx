import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kao-vpq-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kao-vpq-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:paw-fill"} {...others} />);
}

export default Component;
