import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejli6su1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ejli6su1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-dollar-sign-sharp-fill"} {...others} />);
}

export default Component;
