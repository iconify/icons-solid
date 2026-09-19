import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii0ks37cv.css';
import '../../css/c/ca6eh6i6h.css';
import '../../css/e/eedhclziy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flag-outline"><g class="Vector cuyn6tgcc"><path class="ii0ks37cv"/><path clip-rule="evenodd" class="ca6eh6i6h"/><path class="eedhclziy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:flag-outline"} {...others} />);
}

export default Component;
