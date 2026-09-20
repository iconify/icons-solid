import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v1ws40mxs.css';
import '../../css/t/tijnm6bib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v1ws40mxs"/><path class="tijnm6bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hierarchy3"} {...others} />);
}

export default Component;
