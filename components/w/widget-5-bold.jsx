import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yspjl-b4f.css';
import '../../css/o/ozjn960ga.css';
import '../../css/m/mucmghbzo.css';
import '../../css/z/zi-y_bbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yspjl-b4f"/><path class="ozjn960ga"/><path class="mucmghbzo"/><path class="zi-y_bbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-bold"} {...others} />);
}

export default Component;
