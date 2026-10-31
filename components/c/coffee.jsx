import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv5k67beu.css';
import '../../css/r/r31h5ucmh.css';
import '../../css/t/tu1p6wv4m.css';
import '../../css/z/ztzj0t6ov.css';
import '../../css/u/ufymjccux.css';
import '../../css/e/e3yjfmaem.css';
import '../../css/a/anf_uzb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dv5k67beu wm-k"/><path class="r31h5ucmh wm-a"/><path class="tu1p6wv4m wm-deco"/><path class="wm-k ztzj0t6ov"/><path class="ufymjccux wm-a"/><path class="e3yjfmaem wm-shadow"/><path class="anf_uzb9n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:coffee"} {...others} />);
}

export default Component;
