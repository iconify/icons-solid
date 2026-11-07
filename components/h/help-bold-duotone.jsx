import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7r47tacd.css';
import '../../css/v/vfd6cpb4t.css';
import '../../css/z/zem_esjhx.css';
import '../../css/y/y8f17tims.css';
import '../../css/w/w290wdboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o7r47tacd"/><path class="vfd6cpb4t"/><path class="zem_esjhx"/><path class="y8f17tims"/><path class="w290wdboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:help-bold-duotone"} {...others} />);
}

export default Component;
