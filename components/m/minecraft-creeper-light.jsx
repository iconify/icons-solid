import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3y5qibll.css';
import '../../css/b/bxrcbrb3m.css';
import '../../css/r/r-qi2rbge.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p3y5qibll"/><path class="bxrcbrb3m"/><path class="r-qi2rbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minecraft-creeper-light"} {...others} />);
}

export default Component;
