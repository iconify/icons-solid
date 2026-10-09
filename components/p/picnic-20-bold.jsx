import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfg1m8b6f.css';
import '../../css/w/wtom3hs6k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jfg1m8b6f"/><path class="wtom3hs6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:picnic-20-bold"} {...others} />);
}

export default Component;
