import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5quj4l2t.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="c5quj4l2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:database-server-3-remix"} {...others} />);
}

export default Component;
