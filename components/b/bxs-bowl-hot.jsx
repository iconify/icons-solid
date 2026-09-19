import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzvhpvqbp.css';
import '../../css/w/wbplwt0gx.css';
import '../../css/x/xhtwkia_q.css';
import '../../css/l/l9_85xbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzvhpvqbp"/><path class="wbplwt0gx"/><path class="xhtwkia_q"/><path class="l9_85xbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-bowl-hot"} {...others} />);
}

export default Component;
