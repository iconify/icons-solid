import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bffdh0sbk.css';
import '../../css/f/fgfkfvb5d.css';
import '../../css/m/m238k2bdp.css';
import '../../css/n/nj-_kvbxe.css';
import '../../css/u/uws287b8i.css';
import '../../css/w/wp0-obbdh.css';
import '../../css/v/vczx7zbzb.css';
import '../../css/h/h02sk2_tf.css';
import '../../css/f/f6x-jgaem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bffdh0sbk wm-shadow"/><path class="fgfkfvb5d wm-shadow"/><path class="m238k2bdp"/><path class="nj-_kvbxe"/><path class="uws287b8i"/><path class="wp0-obbdh"/><path class="vczx7zbzb wm-shine"/><path class="h02sk2_tf wm-shine"/><path class="f6x-jgaem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:moon"} {...others} />);
}

export default Component;
