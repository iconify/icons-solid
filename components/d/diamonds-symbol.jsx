import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc5h0rrus.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vc5h0rrus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:diamonds-symbol"} {...others} />);
}

export default Component;
