import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcsolabaf.css';
import '../../css/w/w74onkt8p.css';
import '../../css/q/qt9uaibzn.css';

const viewBox = {"width":195,"height":93};
const content = `<path class="tcsolabaf"/><path class="w74onkt8p"/><path class="qt9uaibzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nbk"} {...others} />);
}

export default Component;
