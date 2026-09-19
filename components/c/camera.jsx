import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ilwk4gj4c.css';
import '../../css/w/wmw33dbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ilwk4gj4c"/><path class="wmw33dbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:camera"} {...others} />);
}

export default Component;
