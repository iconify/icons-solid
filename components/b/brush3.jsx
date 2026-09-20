import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j228v6b9i.css';
import '../../css/g/g0_nlcc1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j228v6b9i"/><path class="g0_nlcc1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brush3"} {...others} />);
}

export default Component;
