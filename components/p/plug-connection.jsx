import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp6k_92sh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pp6k_92sh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:plug-connection"} {...others} />);
}

export default Component;
