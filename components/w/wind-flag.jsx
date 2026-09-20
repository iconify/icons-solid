import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/q/qh44byr5t.css';
import '../../css/o/oo1-ggnod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="qh44byr5t"/><path class="oo1-ggnod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wind-flag"} {...others} />);
}

export default Component;
