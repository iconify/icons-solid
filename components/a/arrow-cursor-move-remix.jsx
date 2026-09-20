import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-e1kac9a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d-e1kac9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-cursor-move-remix"} {...others} />);
}

export default Component;
