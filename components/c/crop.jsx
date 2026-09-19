import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jql3tpusm.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="jql3tpusm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:crop"} {...others} />);
}

export default Component;
