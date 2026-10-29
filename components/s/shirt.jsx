import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sclvgdh2f.css';
import '../../css/w/wbiy0ab6r.css';
import '../../css/u/ucqslnb_h.css';
import '../../css/r/rwx2m4bel.css';
import '../../css/x/xu3qqabgh.css';
import '../../css/b/bip_hp6uy.css';
import '../../css/b/b_8n2rbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sclvgdh2f wm-shadow"/><path class="wbiy0ab6r wm-k"/><path class="ucqslnb_h wm-k"/><path class="rwx2m4bel wm-k"/><path class="wm-k xu3qqabgh"/><path class="bip_hp6uy wm-k"/><path class="b_8n2rbkk wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shirt"} {...others} />);
}

export default Component;
