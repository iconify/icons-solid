import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fytct9b5s.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fytct9b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:village2x-outline"} {...others} />);
}

export default Component;
