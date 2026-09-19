import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5o5slegp.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="k5o5slegp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:correct"} {...others} />);
}

export default Component;
