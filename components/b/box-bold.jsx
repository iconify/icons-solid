import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngq_w4btn.css';
import '../../css/h/htgnsl4vu.css';
import '../../css/v/vte5evnzt.css';
import '../../css/f/f9hzkm85j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngq_w4btn"/><path class="htgnsl4vu"/><path class="vte5evnzt"/><path class="f9hzkm85j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-bold"} {...others} />);
}

export default Component;
