import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4dw_ibjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4dw_ibjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mdn-web-docs"} {...others} />);
}

export default Component;
