import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejspzxvkq.css';
import '../../css/j/j1eaccb_w.css';
import '../../css/b/bky4wdbzp.css';
import '../../css/m/mhqiglwct.css';
import '../../css/r/r29g9cgtn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ejspzxvkq"/><path class="j1eaccb_w"/><path class="bky4wdbzp"/><path class="mhqiglwct"/><path class="r29g9cgtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:chickpea"} {...others} />);
}

export default Component;
