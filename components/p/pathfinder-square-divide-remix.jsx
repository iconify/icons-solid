import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv931mb5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pv931mb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pathfinder-square-divide-remix"} {...others} />);
}

export default Component;
