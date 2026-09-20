import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clp7z2bgf.css';
import '../../css/u/u7sq-5xjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="clp7z2bgf"/><path class="u7sq-5xjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:thunderstorm-fill"} {...others} />);
}

export default Component;
