import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot-rahdwk.css';
import '../../css/m/mk7apdhpz.css';
import '../../css/f/fgrlfobbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ot-rahdwk"/><path class="mk7apdhpz"/><path class="fgrlfobbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:command-bold"} {...others} />);
}

export default Component;
