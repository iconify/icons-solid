import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk6l05vzg.css';
import '../../css/s/syj13jypd.css';
import '../../css/j/jry7t1btu.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGA4ymMhAI"><g class="ft5dv1b6b"><path class="kk6l05vzg"/><path class="syj13jypd"/><path class="jry7t1btu"/></g></mask></defs><path mask="url(#SVGA4ymMhAI)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-duotone"} {...others} />);
}

export default Component;
