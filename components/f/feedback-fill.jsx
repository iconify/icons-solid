import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkb-u9edw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkb-u9edw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:feedback-fill"} {...others} />);
}

export default Component;
