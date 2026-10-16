import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moyoz5fkv.css';
import '../../css/p/p5ne8n6_a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="moyoz5fkv"/><path class="p5ne8n6_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-round-48-bold"} {...others} />);
}

export default Component;
