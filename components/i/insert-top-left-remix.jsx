import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-l9itbzy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l-l9itbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:insert-top-left-remix"} {...others} />);
}

export default Component;
