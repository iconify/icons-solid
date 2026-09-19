import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4_cu0b4c.css';
import '../../css/f/fvtev__4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4_cu0b4c"/><path class="fvtev__4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:chevrons-up"} {...others} />);
}

export default Component;
