import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udhl7bbum.css';
import '../../css/c/ch0lkibmx.css';
import '../../css/k/k5s_6-4ei.css';
import '../../css/d/dw6-rudva.css';
import '../../css/x/xowa9vplg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="udhl7bbum"/><path class="ch0lkibmx"/><path class="k5s_6-4ei"/><path class="dw6-rudva"/><path class="xowa9vplg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-edit-bold-duotone"} {...others} />);
}

export default Component;
