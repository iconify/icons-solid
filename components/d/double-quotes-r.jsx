import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7_d7wiqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7_d7wiqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:double-quotes-r"} {...others} />);
}

export default Component;
