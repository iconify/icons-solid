import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubgk3rb-x.css';
import '../../css/k/kx15g1jff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubgk3rb-x"/><path clip-rule="evenodd" class="kx15g1jff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ios-fill"} {...others} />);
}

export default Component;
