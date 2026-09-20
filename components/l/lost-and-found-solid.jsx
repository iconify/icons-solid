import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqjx7xywg.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pqjx7xywg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lost-and-found-solid"} {...others} />);
}

export default Component;
