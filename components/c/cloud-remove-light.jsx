import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wuu1i6jkg.css';
import '../../css/z/zarj99gxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wuu1i6jkg"/><path class="zarj99gxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-remove-light"} {...others} />);
}

export default Component;
