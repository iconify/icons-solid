import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izue1acve.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="izue1acve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-edit-robot-remix"} {...others} />);
}

export default Component;
