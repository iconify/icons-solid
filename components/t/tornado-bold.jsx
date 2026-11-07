import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5q-ddpsz.css';
import '../../css/o/owf76acqr.css';
import '../../css/f/fgynpdb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y5q-ddpsz"/><path class="owf76acqr"/><path clip-rule="evenodd" class="fgynpdb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-bold"} {...others} />);
}

export default Component;
