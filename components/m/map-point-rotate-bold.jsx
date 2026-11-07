import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogd2nrbqw.css';
import '../../css/i/i2rrj-bgy.css';
import '../../css/a/amjowyqts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogd2nrbqw"/><path class="i2rrj-bgy"/><path clip-rule="evenodd" class="amjowyqts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-rotate-bold"} {...others} />);
}

export default Component;
