import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o90f_1ibj.css';
import '../../css/t/t33cxfb4q.css';
import '../../css/z/z4nxktxkg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o90f_1ibj"/><path class="t33cxfb4q"/><path class="z4nxktxkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:many-notes"} {...others} />);
}

export default Component;
