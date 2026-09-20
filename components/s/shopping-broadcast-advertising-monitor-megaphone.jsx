import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uun79-b5c.css';
import '../../css/h/hn-fsycso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uun79-b5c"/><path class="hn-fsycso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-broadcast-advertising-monitor-megaphone"} {...others} />);
}

export default Component;
