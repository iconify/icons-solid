import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7zbev1jn.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="f7zbev1jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:star-circle-solid"} {...others} />);
}

export default Component;
