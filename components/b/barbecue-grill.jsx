import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5f7jkg_i.css';
import '../../css/v/v1rrmab1b.css';
import '../../css/y/yzuc4-9_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e5f7jkg_i"/><path class="v1rrmab1b"/><path class="yzuc4-9_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:barbecue-grill"} {...others} />);
}

export default Component;
