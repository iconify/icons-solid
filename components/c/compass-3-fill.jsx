import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-0e2ykrb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-0e2ykrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:compass-3-fill"} {...others} />);
}

export default Component;
