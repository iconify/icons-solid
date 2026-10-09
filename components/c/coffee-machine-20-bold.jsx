import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yocctqbef.css';
import '../../css/r/renkk5ypo.css';
import '../../css/y/yepqybc2a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yocctqbef"/><path class="renkk5ypo"/><path class="yepqybc2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-machine-20-bold"} {...others} />);
}

export default Component;
