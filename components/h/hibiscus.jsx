import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k727c1bes.css';
import '../../css/p/p-ehit_wl.css';
import '../../css/r/r_28-d6jk.css';
import '../../css/o/owko1921z.css';
import '../../css/f/fkzu1lbzu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k727c1bes"/><path class="p-ehit_wl"/><path class="r_28-d6jk"/><path class="owko1921z"/><path class="fkzu1lbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hibiscus"} {...others} />);
}

export default Component;
