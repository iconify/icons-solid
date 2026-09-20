import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r575v9bcz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="r575v9bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-edit-robot-solid"} {...others} />);
}

export default Component;
