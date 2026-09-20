import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tejqw0big.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="tejqw0big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bug-virus-browser-solid"} {...others} />);
}

export default Component;
