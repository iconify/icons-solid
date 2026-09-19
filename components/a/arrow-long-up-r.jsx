import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2awwsbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w2awwsbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:arrow-long-up-r"} {...others} />);
}

export default Component;
