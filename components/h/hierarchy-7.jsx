import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9n1363wd.css';
import '../../css/t/tw39ay8jf.css';
import '../../css/e/etsv_nb6b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g9n1363wd"/><path class="tw39ay8jf"/><path class="etsv_nb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hierarchy-7"} {...others} />);
}

export default Component;
