import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_h3f3bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w_h3f3bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ngm"} {...others} />);
}

export default Component;
