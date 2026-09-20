import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_va5_htj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l_va5_htj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:clean-water-and-sanitation-remix"} {...others} />);
}

export default Component;
