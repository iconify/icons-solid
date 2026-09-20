import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptpca_ffg.css';
import '../../css/m/m9ted4zaz.css';
import '../../css/w/wdkf5qwjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ptpca_ffg"/><path class="m9ted4zaz"/><circle class="wdkf5qwjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:search-duotone"} {...others} />);
}

export default Component;
