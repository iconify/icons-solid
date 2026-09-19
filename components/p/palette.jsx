import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hex5etblr.css';
import '../../css/m/mfq_7cbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hex5etblr"/><path class="mfq_7cbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:palette"} {...others} />);
}

export default Component;
