import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrgw8tmqm.css';
import '../../css/u/uulyedb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hrgw8tmqm"/><path class="uulyedb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:phone-outgoing"} {...others} />);
}

export default Component;
