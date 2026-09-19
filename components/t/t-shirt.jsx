import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhmd9mu1g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bhmd9mu1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:t-shirt"} {...others} />);
}

export default Component;
