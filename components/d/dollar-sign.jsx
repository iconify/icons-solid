import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6432zb_d.css';
import '../../css/a/alc0ykp4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6432zb_d"/><path class="alc0ykp4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dollar-sign"} {...others} />);
}

export default Component;
