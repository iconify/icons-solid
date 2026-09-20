import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vzyn7vbti.css';
import '../../css/a/adiyw3bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vzyn7vbti"/><path class="adiyw3bmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-upload"} {...others} />);
}

export default Component;
