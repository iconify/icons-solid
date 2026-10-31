import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh2693boa.css';
import '../../css/f/f1av2wb0k.css';
import '../../css/r/ra7pdcbvc.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="lh2693boa"/><path class="f1av2wb0k"/><path class="ra7pdcbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:pirate"} {...others} />);
}

export default Component;
