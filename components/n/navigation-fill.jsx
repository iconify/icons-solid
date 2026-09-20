import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr7sn_xxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kr7sn_xxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:navigation-fill"} {...others} />);
}

export default Component;
