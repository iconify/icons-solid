import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz58fnbwx.css';
import '../../css/x/x4shk053m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz58fnbwx"/><path class="x4shk053m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:apex"} {...others} />);
}

export default Component;
