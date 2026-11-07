import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ois7oyb4y.css';
import '../../css/a/a_k6rh_6d.css';
import '../../css/x/xbyvhobil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ois7oyb4y"/><path class="a_k6rh_6d"/><path clip-rule="evenodd" class="xbyvhobil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cpu-bolt-bold-duotone"} {...others} />);
}

export default Component;
