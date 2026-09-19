import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paurdn42f.css';
import '../../css/w/ws0xuezat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="paurdn42f"/><path class="ws0xuezat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:system-group"} {...others} />);
}

export default Component;
