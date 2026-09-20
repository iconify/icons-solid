import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9lhmib8f.css';
import '../../css/d/d_cc7c6xv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m9lhmib8f"/><path class="d_cc7c6xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lingva-translate-light"} {...others} />);
}

export default Component;
