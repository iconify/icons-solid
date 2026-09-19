import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzh7glb6r.css';
import '../../css/w/wnppey9ws.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="zzh7glb6r"/><path class="wnppey9ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-landscape"} {...others} />);
}

export default Component;
