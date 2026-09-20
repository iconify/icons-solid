import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wlfplgbdd.css';
import '../../css/t/tg-ju6bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wlfplgbdd"/><path class="tg-ju6bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:medical-folder"} {...others} />);
}

export default Component;
