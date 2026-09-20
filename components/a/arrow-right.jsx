import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e61q-jbpv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e61q-jbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:arrow-right"} {...others} />);
}

export default Component;
