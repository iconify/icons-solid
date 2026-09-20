import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puw0kjb1k.css';
import '../../css/g/ginn57b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="puw0kjb1k"/><path class="ginn57b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-bug-bold"} {...others} />);
}

export default Component;
