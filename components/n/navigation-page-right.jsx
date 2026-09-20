import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6_lwd2sp.css';
import '../../css/e/e-tetgb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6_lwd2sp"/><path class="e-tetgb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:navigation-page-right"} {...others} />);
}

export default Component;
