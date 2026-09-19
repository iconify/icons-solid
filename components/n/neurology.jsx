import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/refycabrq.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="refycabrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:neurology"} {...others} />);
}

export default Component;
