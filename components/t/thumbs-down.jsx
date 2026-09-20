import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ga_sunbve.css';
import '../../css/v/v9_s8abew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect transform="rotate(180 21.25 16.8)" class="ga_sunbve"/><path class="v9_s8abew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:thumbs-down"} {...others} />);
}

export default Component;
