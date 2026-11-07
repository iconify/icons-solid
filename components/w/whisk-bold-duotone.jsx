import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bji9ibcha.css';
import '../../css/b/boq_u9ond.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bji9ibcha"/><path class="boq_u9ond"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:whisk-bold-duotone"} {...others} />);
}

export default Component;
