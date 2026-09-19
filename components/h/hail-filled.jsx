import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d09-d0b7r.css';
import '../../css/f/f9l077jci.css';
import '../../css/l/lxgy755lv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d09-d0b7r"/><path class="f9l077jci"/><path class="lxgy755lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hail-filled"} {...others} />);
}

export default Component;
