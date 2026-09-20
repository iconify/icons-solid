import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7ucprb3o.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="p7ucprb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tree-1-remix"} {...others} />);
}

export default Component;
