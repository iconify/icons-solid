import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/iyk7u5oma.css';
import '../../css/j/jv99c-haf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="iyk7u5oma"/><path class="jv99c-haf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gameboy3"} {...others} />);
}

export default Component;
