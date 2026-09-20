import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/koq391beo.css';
import '../../css/y/y5nwozvzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="koq391beo"/><path class="y5nwozvzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-thick-up-4"} {...others} />);
}

export default Component;
