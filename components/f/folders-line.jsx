import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/ldocbeb6f.css';
import '../../css/a/ao01edcje.css';
import '../../css/p/pag9h1bav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ldocbeb6f"/><path class="ao01edcje"/><path class="pag9h1bav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folders-line"} {...others} />);
}

export default Component;
