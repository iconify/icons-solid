import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezk93g3ho.css';
import '../../css/b/b2b32nzwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezk93g3ho"/><path class="b2b32nzwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrop-bold-duotone"} {...others} />);
}

export default Component;
