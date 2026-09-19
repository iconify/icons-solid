import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgobqvysn.css';
import '../../css/f/fzc4cyr3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgobqvysn"/><path class="fzc4cyr3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:api-outlined"} {...others} />);
}

export default Component;
