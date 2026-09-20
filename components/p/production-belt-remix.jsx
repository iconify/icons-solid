import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1y8h2bqm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l1y8h2bqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:production-belt-remix"} {...others} />);
}

export default Component;
