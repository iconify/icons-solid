import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul4ei0bva.css';
import '../../css/l/lwmq8uo7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ul4ei0bva"/><path class="lwmq8uo7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mobile-alt"} {...others} />);
}

export default Component;
