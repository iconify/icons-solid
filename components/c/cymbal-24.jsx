import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceyuqobfb.css';
import '../../css/l/lboxqc-ta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ceyuqobfb"/><path clip-rule="evenodd" class="lboxqc-ta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cymbal-24"} {...others} />);
}

export default Component;
