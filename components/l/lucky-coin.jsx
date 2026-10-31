import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4k5zsbze.css';
import '../../css/d/dhv9_4sxf.css';
import '../../css/u/umg75fvyf.css';
import '../../css/b/bq2vc3b8t.css';
import '../../css/c/ci8v5sb-k.css';
import '../../css/b/bhduykskv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4k5zsbze wm-shadow"/><path class="dhv9_4sxf"/><path class="umg75fvyf"/><path class="bq2vc3b8t"/><path class="ci8v5sb-k"/><path class="bhduykskv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lucky-coin"} {...others} />);
}

export default Component;
