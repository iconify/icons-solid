import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sfocs9iyr.css';
import '../../css/z/zo2m4cccf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sfocs9iyr"/><path class="zo2m4cccf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microphone-slash2"} {...others} />);
}

export default Component;
