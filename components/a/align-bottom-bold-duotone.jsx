import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1-qbmafx.css';
import '../../css/u/ul-233bzy.css';
import '../../css/d/dbfay--fo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1-qbmafx"/><path class="ul-233bzy"/><path clip-rule="evenodd" class="dbfay--fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-bottom-bold-duotone"} {...others} />);
}

export default Component;
