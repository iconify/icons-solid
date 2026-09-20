import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab4osybgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ab4osybgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bowknot-fill"} {...others} />);
}

export default Component;
