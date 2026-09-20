import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2dnkwqwe.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="n2dnkwqwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dice-3-remix"} {...others} />);
}

export default Component;
