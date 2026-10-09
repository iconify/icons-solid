import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix3tztiqy.css';
import '../../css/s/sg1__vokg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ix3tztiqy"/><path class="sg1__vokg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pine-tree-20"} {...others} />);
}

export default Component;
