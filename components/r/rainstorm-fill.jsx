import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abgj25bzr.css';
import '../../css/a/almf4_bws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abgj25bzr"/><path class="almf4_bws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rainstorm-fill"} {...others} />);
}

export default Component;
