import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xqkznob5a.css';
import '../../css/z/z8ec_ubvd.css';
import '../../css/l/l4do04bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xqkznob5a"/><path class="z8ec_ubvd"/><path class="l4do04bvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:optimization-configuration"} {...others} />);
}

export default Component;
