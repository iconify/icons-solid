import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gdhb-9m3j.css';
import '../../css/a/a7bze6b2n.css';
import '../../css/b/blkkutb3v.css';
import '../../css/s/s3oljgb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gdhb-9m3j"/><path clip-rule="evenodd" class="a7bze6b2n"/><path class="blkkutb3v"/><path class="s3oljgb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:surveillance-camera-flat"} {...others} />);
}

export default Component;
