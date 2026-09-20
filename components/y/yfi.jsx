import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul5vootxd.css';
import '../../css/m/m3iep9b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ul5vootxd"/><path class="m3iep9b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:yfi"} {...others} />);
}

export default Component;
