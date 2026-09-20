import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-tqdrbyb.css';
import '../../css/j/j-tmtc6ls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-tqdrbyb"/><path clip-rule="evenodd" class="j-tmtc6ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-bold-duotone"} {...others} />);
}

export default Component;
