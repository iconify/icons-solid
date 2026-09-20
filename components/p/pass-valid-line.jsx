import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpl6erble.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpl6erble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pass-valid-line"} {...others} />);
}

export default Component;
