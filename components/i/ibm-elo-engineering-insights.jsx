import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo6j7xbls.css';
import '../../css/v/vrpmrdbjw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lo6j7xbls"/><path class="vrpmrdbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-elo-engineering-insights"} {...others} />);
}

export default Component;
