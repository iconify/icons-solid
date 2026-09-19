import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi-iagg1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oi-iagg1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:flag"} {...others} />);
}

export default Component;
