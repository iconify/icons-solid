import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/opo1zcc8y.css';
import '../../css/o/o8cb350vf.css';
import '../../css/e/em4i2mbry.css';
import '../../css/a/am077nbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="opo1zcc8y"/><path class="o8cb350vf"/><path class="em4i2mbry"/><path class="am077nbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-link"} {...others} />);
}

export default Component;
