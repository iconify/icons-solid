import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei2jpv_jy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ei2jpv_jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:knowledgebase"} {...others} />);
}

export default Component;
