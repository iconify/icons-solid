import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is5ym2bkj.css';
import '../../css/s/s4j2h1b7o.css';
import '../../css/p/p2rh9dbbw.css';
import '../../css/g/gftw6mbvr.css';
import '../../css/t/ty9gllnhy.css';
import '../../css/g/gsukxebal.css';
import '../../css/b/bzlzamgmk.css';
import '../../css/e/exl_xfbrh.css';
import '../../css/v/v8nqen7fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="is5ym2bkj wm-shadow"/><path class="s4j2h1b7o wm-k"/><path class="p2rh9dbbw wm-k"/><path class="gftw6mbvr wm-k"/><path class="ty9gllnhy wm-k"/><path class="gsukxebal wm-k"/><path class="bzlzamgmk wm-shine"/><path class="exl_xfbrh wm-k"/><path class="v8nqen7fc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sandwich"} {...others} />);
}

export default Component;
