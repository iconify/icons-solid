import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxrv5xbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxrv5xbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:dossier-line"} {...others} />);
}

export default Component;
