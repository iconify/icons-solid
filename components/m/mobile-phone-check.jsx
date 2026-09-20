import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dehze7bnb.css';
import '../../css/y/yj3jxrb_r.css';
import '../../css/g/ga02vw0-t.css';
import '../../css/h/hj7_en79e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dehze7bnb"/><path class="yj3jxrb_r"/><path class="ga02vw0-t"/><path class="hj7_en79e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mobile-phone-check"} {...others} />);
}

export default Component;
