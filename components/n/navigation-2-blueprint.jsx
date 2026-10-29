import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yiqh8yb1e.css';
import '../../css/t/tlu2axhcd.css';
import '../../css/n/nqwgjqbun.css';
import '../../css/z/zz-4-abbe.css';
import '../../css/a/a8-kfs6dt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yiqh8yb1e"/><path class="tlu2axhcd wm-deco"/><path class="nqwgjqbun wm-deco"/><path class="zz-4-abbe"/><path class="a8-kfs6dt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:navigation-2-blueprint"} {...others} />);
}

export default Component;
