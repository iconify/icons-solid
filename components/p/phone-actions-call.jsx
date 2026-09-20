import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b06rkq0uc.css';
import '../../css/n/n8axbibmh.css';
import '../../css/h/hanyvkbna.css';
import '../../css/v/v9t4l4boi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b06rkq0uc"/><path class="n8axbibmh"/><path class="hanyvkbna"/><path class="v9t4l4boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:phone-actions-call"} {...others} />);
}

export default Component;
