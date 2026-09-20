import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llo9xcgaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="llo9xcgaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:greenhouse"} {...others} />);
}

export default Component;
