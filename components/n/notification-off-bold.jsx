import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvlvhpb4k.css';
import '../../css/r/rbns1x26b.css';
import '../../css/u/umzj1472b.css';
import '../../css/b/bg3j-3buk.css';
import '../../css/g/gq0qt0sbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cvlvhpb4k"><path class="rbns1x26b"/><circle class="umzj1472b"/><path class="bg3j-3buk"/><path class="gq0qt0sbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:notification-off-bold"} {...others} />);
}

export default Component;
