import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2n3zmxig.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="b2n3zmxig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:triangle-arrow-turn-down-left-large-remix"} {...others} />);
}

export default Component;
