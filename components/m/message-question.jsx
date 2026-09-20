import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sdycol47i.css';
import '../../css/g/gmpt436mv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sdycol47i"/><path class="gmpt436mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-question"} {...others} />);
}

export default Component;
