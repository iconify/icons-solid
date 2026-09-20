import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bveiwfbhu.css';
import '../../css/m/mh2g8ibox.css';
import '../../css/l/lwow3knzh.css';
import '../../css/a/a-eppqbrl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bveiwfbhu"/><path class="mh2g8ibox"/><path class="lwow3knzh"/><path class="a-eppqbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:travel-wayfinding-beach-umbrella"} {...others} />);
}

export default Component;
