import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtvh7v3ee.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jtvh7v3ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:expand"} {...others} />);
}

export default Component;
