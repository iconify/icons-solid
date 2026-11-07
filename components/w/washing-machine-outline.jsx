import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_xfbhytv.css';
import '../../css/t/t5sicqsen.css';
import '../../css/u/u1-hubbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n_xfbhytv"/><path class="t5sicqsen"/><path class="u1-hubbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-outline"} {...others} />);
}

export default Component;
