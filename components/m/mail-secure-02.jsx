import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ffz_sgboe.css';
import '../../css/f/fbdiwogxt.css';
import '../../css/a/a9auvsbwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ffz_sgboe"/><path class="fbdiwogxt"/><path class="a9auvsbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-secure-02"} {...others} />);
}

export default Component;
