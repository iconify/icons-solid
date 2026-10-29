import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtx6psbzo.css';
import '../../css/a/at7kggyha.css';
import '../../css/w/w-0qn00ya.css';
import '../../css/w/wyyrhux3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtx6psbzo wm-k"/><path class="at7kggyha wm-a"/><path class="w-0qn00ya wm-a"/><path class="wm-a wyyrhux3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fingerprint"} {...others} />);
}

export default Component;
