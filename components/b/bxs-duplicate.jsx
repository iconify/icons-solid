import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puqv5u2-o.css';
import '../../css/n/ngen2gb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="puqv5u2-o"/><path class="ngen2gb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-duplicate"} {...others} />);
}

export default Component;
