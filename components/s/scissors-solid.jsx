import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8hrmeb-y.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="q8hrmeb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:scissors-solid"} {...others} />);
}

export default Component;
