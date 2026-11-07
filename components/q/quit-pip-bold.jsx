import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz0u67btj.css';
import '../../css/x/x3oufibth.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tz0u67btj"/><path class="x3oufibth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-pip-bold"} {...others} />);
}

export default Component;
