import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pepyl3vpw.css';
import '../../css/z/z3n43-bnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pepyl3vpw"/><path class="z3n43-bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
