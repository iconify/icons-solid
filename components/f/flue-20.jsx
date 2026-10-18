import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3hdfd1we.css';
import '../../css/s/s6ixhrb8c.css';
import '../../css/l/lz72tab4a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n3hdfd1we"/><path class="s6ixhrb8c"/><path class="lz72tab4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flue-20"} {...others} />);
}

export default Component;
