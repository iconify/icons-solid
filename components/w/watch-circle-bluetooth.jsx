import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m-tg0dbie.css';
import '../../css/n/nkl72kbds.css';
import '../../css/c/cmp4kzb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m-tg0dbie"/><path class="nkl72kbds"/><path class="cmp4kzb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:watch-circle-bluetooth"} {...others} />);
}

export default Component;
