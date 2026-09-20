import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_nlgac9n.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="i_nlgac9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hand-held-remix"} {...others} />);
}

export default Component;
