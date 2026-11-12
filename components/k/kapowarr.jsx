import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkl81gx0s.css';
import '../../css/z/zhbt1i4-l.css';
import '../../css/n/nhswtdsta.css';
import '../../css/y/ybvscuusk.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="nkl81gx0s"/><path class="zhbt1i4-l"/><path class="nhswtdsta"/><path class="ybvscuusk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kapowarr"} {...others} />);
}

export default Component;
