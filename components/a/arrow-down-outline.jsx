import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bizf7qbor.css';
import '../../css/h/heochxbce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bizf7qbor"/><path clip-rule="evenodd" class="heochxbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-down-outline"} {...others} />);
}

export default Component;
