import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg4rycc9o.css';
import '../../css/q/qfttfgb8q.css';
import '../../css/d/djyvkb6-g.css';
import '../../css/f/frp7jbb5h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sg4rycc9o"/><path class="qfttfgb8q"/><path class="djyvkb6-g"/><path class="frp7jbb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:yii"} {...others} />);
}

export default Component;
