import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5owbxejs.css';
import '../../css/b/bh6mgkb1s.css';
import '../../css/h/honxv238r.css';
import '../../css/n/nvm79obuk.css';
import '../../css/v/vhwzmmbvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5owbxejs wm-shadow"/><path class="bh6mgkb1s wm-k"/><path class="honxv238r wm-k"/><path class="nvm79obuk wm-a"/><path class="vhwzmmbvz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:indent-decrease"} {...others} />);
}

export default Component;
