import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zenyhg4uf.css';
import '../../css/u/u6-32zbnu.css';
import '../../css/f/fpad1pbpd.css';
import '../../css/k/kh1beibzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zenyhg4uf"/><path class="u6-32zbnu"/><path class="fpad1pbpd"/><path class="kh1beibzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:colour-tuning-bold-duotone"} {...others} />);
}

export default Component;
