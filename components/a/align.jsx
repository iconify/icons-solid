import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laizaxi8c.css';
import '../../css/q/q74t5xb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="laizaxi8c"/><path class="q74t5xb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:align"} {...others} />);
}

export default Component;
