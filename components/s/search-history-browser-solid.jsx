import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9edm8azq.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="o9edm8azq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:search-history-browser-solid"} {...others} />);
}

export default Component;
