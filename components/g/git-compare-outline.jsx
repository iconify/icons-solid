import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbvcw8bkn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rbvcw8bkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:git-compare-outline"} {...others} />);
}

export default Component;
