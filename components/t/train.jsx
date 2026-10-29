import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzf_z6h6u.css';
import '../../css/n/ntcbpqbvi.css';
import '../../css/c/c8-d15b5e.css';
import '../../css/b/bo2b4ff_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a wzf_z6h6u"/><path class="ntcbpqbvi wm-k"/><path class="c8-d15b5e wm-k"/><path class="bo2b4ff_v wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:train"} {...others} />);
}

export default Component;
