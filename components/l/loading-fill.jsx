import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3wkt0bdn.css';
import '../../css/c/cv6dnabfl.css';
import '../../css/n/nn5-jrewn.css';
import '../../css/f/f29idxbbk.css';
import '../../css/t/t77nx-f_u.css';
import '../../css/s/spwzbmzuk.css';
import '../../css/t/tbx282kui.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><linearGradient id="SVGf3T1bePZ" x1="12" x2="12" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset=".05" class="u3wkt0bdn"/><stop offset=".3" class="cv6dnabfl"/><stop offset="1" class="nn5-jrewn"/></linearGradient><linearGradient id="SVGoaA2CiVK" x1="13" x2="13" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset=".05" class="u3wkt0bdn"/><stop offset=".45" class="f29idxbbk"/><stop offset=".823" class="t77nx-f_u"/></linearGradient></defs><path fill="url(#SVGf3T1bePZ)" class="spwzbmzuk"/><path fill="url(#SVGoaA2CiVK)" class="tbx282kui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-fill"} {...others} />);
}

export default Component;
