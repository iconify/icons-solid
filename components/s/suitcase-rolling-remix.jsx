import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr9kh0b-a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="kr9kh0b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:suitcase-rolling-remix"} {...others} />);
}

export default Component;
