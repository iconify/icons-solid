import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4udb9b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n4udb9b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:radar-2-fill"} {...others} />);
}

export default Component;
