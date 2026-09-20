import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pwbt2qflx.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/g/giihlsblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="pwbt2qflx"/><circle class="m4l-9ybuj"/><path class="giihlsblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-cicrle-light"} {...others} />);
}

export default Component;
