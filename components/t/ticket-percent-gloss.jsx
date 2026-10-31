import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3l1uf5yg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3l1uf5yg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ticket-percent-gloss"} {...others} />);
}

export default Component;
