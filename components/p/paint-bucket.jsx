import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkesgfh4s.css';
import '../../css/m/m06lb4csh.css';
import '../../css/a/a5fqvcepc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dkesgfh4s"/><path class="m06lb4csh"/><path class="a5fqvcepc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:paint-bucket"} {...others} />);
}

export default Component;
