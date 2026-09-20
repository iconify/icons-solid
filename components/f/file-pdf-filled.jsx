import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to4gwhjvi.css';
import '../../css/z/zcsfiacrb.css';
import '../../css/o/otto5l3wd.css';
import '../../css/c/cb7u8-bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="to4gwhjvi"/><path class="zcsfiacrb"/><path clip-rule="evenodd" class="otto5l3wd"/><path class="cb7u8-bvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file-pdf-filled"} {...others} />);
}

export default Component;
