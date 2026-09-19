import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg26jqbpn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eg26jqbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:plus-square-dotted"} {...others} />);
}

export default Component;
