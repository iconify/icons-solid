import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df1snmbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="df1snmbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tennis-2-bold"} {...others} />);
}

export default Component;
