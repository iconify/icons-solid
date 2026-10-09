import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvg-drbfm.css';
import '../../css/f/f0fgz2b6c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dvg-drbfm"/><path class="f0fgz2b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-20-bold"} {...others} />);
}

export default Component;
