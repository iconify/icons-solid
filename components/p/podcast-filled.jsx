import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzhc1vhit.css';
import '../../css/f/fiyyqmf7i.css';
import '../../css/u/uuvohyb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dzhc1vhit"/><path clip-rule="evenodd" class="fiyyqmf7i"/><path clip-rule="evenodd" class="uuvohyb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:podcast-filled"} {...others} />);
}

export default Component;
