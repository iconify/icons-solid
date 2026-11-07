import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dff8bp7ci.css';
import '../../css/g/gpwxw0bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dff8bp7ci"/><path class="gpwxw0bmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-bold"} {...others} />);
}

export default Component;
