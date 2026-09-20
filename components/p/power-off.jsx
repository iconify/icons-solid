import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epagx4b5c.css';
import '../../css/o/odq3bckdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="epagx4b5c"/><path class="odq3bckdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:power-off"} {...others} />);
}

export default Component;
