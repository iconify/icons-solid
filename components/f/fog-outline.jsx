import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3v_fcbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q3v_fcbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fog-outline"} {...others} />);
}

export default Component;
