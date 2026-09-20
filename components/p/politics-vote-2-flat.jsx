import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et4n23bxf.css';
import '../../css/w/wpy2ibbvy.css';
import '../../css/s/sw6whzz-k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="et4n23bxf"/><path class="wpy2ibbvy"/><path clip-rule="evenodd" class="sw6whzz-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:politics-vote-2-flat"} {...others} />);
}

export default Component;
