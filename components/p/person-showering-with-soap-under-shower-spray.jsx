import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaiv5obsq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uaiv5obsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-showering-with-soap-under-shower-spray"} {...others} />);
}

export default Component;
