import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnvmww__d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnvmww__d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:pronounsdotpage"} {...others} />);
}

export default Component;
