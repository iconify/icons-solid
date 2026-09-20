import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3cd7ibxu.css';
import '../../css/p/pz9k4djmg.css';
import '../../css/v/v9x3yzuus.css';
import '../../css/q/qipz36fvw.css';
import '../../css/e/e555xqbrx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m3cd7ibxu"/><path class="pz9k4djmg"/><path class="v9x3yzuus"/><path class="qipz36fvw"/><path class="e555xqbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:sparkling-heart"} {...others} />);
}

export default Component;
