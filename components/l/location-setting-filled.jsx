import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqze8hb0i.css';
import '../../css/x/xsi-ndbpf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqze8hb0i"/><path class="xsi-ndbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:location-setting-filled"} {...others} />);
}

export default Component;
