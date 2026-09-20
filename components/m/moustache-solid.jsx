import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx-2j1bvi.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tx-2j1bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:moustache-solid"} {...others} />);
}

export default Component;
