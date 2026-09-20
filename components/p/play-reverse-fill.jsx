import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr-6avbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr-6avbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:play-reverse-fill"} {...others} />);
}

export default Component;
