import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi_7smg8p.css';
import '../../css/z/za0y9kbbq.css';
import '../../css/b/bmqmgbbve.css';
import '../../css/w/w_wojc56u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi_7smg8p wm-k"/><path class="wm-a za0y9kbbq"/><path class="bmqmgbbve wm-a"/><path class="w_wojc56u wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:speaker"} {...others} />);
}

export default Component;
