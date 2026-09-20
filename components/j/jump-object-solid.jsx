import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be0lh-30x.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="be0lh-30x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:jump-object-solid"} {...others} />);
}

export default Component;
