import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb-3h3i8a.css';
import '../../css/t/ttn15vtks.css';
import '../../css/w/wycr1gktp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qb-3h3i8a"/><path clip-rule="evenodd" class="ttn15vtks"/><path class="wycr1gktp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plus-minus-bold-duotone"} {...others} />);
}

export default Component;
