import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcz2uwtww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcz2uwtww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:progress-3-fill"} {...others} />);
}

export default Component;
