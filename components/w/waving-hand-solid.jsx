import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5a3ny35e.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d5a3ny35e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:waving-hand-solid"} {...others} />);
}

export default Component;
