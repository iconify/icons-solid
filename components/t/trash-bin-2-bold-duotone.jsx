import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-9z98bit.css';
import '../../css/p/pepyl3vpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-9z98bit"/><path class="pepyl3vpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-2-bold-duotone"} {...others} />);
}

export default Component;
