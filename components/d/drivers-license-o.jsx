import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_0vdbc1d.css';

const viewBox = {"width":2048,"height":1536};
const content = `<path class="f_0vdbc1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:drivers-license-o"} {...others} />);
}

export default Component;
