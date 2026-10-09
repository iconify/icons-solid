import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0q12sb0a.css';
import '../../css/r/r4qnuebsn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d0q12sb0a"/><path class="r4qnuebsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-octagon-20-bold"} {...others} />);
}

export default Component;
