import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yoywkzb6s.css';
import '../../css/x/x6fkcqb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yoywkzb6s"/><path class="x6fkcqb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:phone-circle-off"} {...others} />);
}

export default Component;
