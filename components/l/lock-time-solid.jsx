import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2b_6hlrf.css';
import '../../css/h/hldc7zb1q.css';
import '../../css/p/pzaakibfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x2b_6hlrf"/><path class="hldc7zb1q"/><path clip-rule="evenodd" class="pzaakibfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:lock-time-solid"} {...others} />);
}

export default Component;
