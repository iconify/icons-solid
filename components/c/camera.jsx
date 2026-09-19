import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tydndxb5d.css';
import '../../css/f/fjomncsfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tydndxb5d"/><path class="fjomncsfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:camera"} {...others} />);
}

export default Component;
