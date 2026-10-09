import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggyrz3unk.css';
import '../../css/c/ci8zk7bhv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ggyrz3unk"/><path class="ci8zk7bhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fast-forward-20-bold"} {...others} />);
}

export default Component;
