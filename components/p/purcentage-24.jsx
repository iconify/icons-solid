import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvxfjeb_u.css';
import '../../css/p/pi59231_r.css';
import '../../css/m/m1642jb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gvxfjeb_u"/><path class="pi59231_r"/><path clip-rule="evenodd" class="m1642jb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:purcentage-24"} {...others} />);
}

export default Component;
