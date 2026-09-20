import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ii7dwjb3q.css';
import '../../css/w/w17amxb6c.css';
import '../../css/v/vzos5zbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ii7dwjb3q"/><path class="w17amxb6c"/><path class="vzos5zbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-fibonacci"} {...others} />);
}

export default Component;
