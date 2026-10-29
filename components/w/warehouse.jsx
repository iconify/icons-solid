import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shzi5lk7v.css';
import '../../css/z/zkinl8z7h.css';
import '../../css/p/pphg3627g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shzi5lk7v wm-k"/><path class="wm-a zkinl8z7h"/><path class="pphg3627g wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:warehouse"} {...others} />);
}

export default Component;
