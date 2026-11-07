import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayzb5ccgl.css';
import '../../css/s/sdtufnbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ayzb5ccgl"/><path class="sdtufnbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:play-stream-bold"} {...others} />);
}

export default Component;
