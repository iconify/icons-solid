import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrw-l5b1k.css';
import '../../css/o/osatibboq.css';
import '../../css/o/ooq4xdh-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrw-l5b1k"/><path class="osatibboq"/><path class="ooq4xdh-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-pills-bold"} {...others} />);
}

export default Component;
