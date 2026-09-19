import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lud_oq9-e.css';
import '../../css/f/f3cbn2boa.css';
import '../../css/q/q8o975bft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lud_oq9-e"/><path class="f3cbn2boa"/><path class="q8o975bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cast-filled"} {...others} />);
}

export default Component;
