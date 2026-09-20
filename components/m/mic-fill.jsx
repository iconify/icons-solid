import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unvuw1rfu.css';
import '../../css/m/mkvymd0ml.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="unvuw1rfu"/><path class="mkvymd0ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:mic-fill"} {...others} />);
}

export default Component;
