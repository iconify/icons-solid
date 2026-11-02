import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-hcm6bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-hcm6bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bug-play-fill"} {...others} />);
}

export default Component;
