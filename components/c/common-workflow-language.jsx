import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs0u1_bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs0u1_bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:common-workflow-language"} {...others} />);
}

export default Component;
