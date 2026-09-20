import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0crblb7u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="o0crblb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:scanner-3-solid"} {...others} />);
}

export default Component;
