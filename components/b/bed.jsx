import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7p__wdjy.css';
import '../../css/d/df84tibzk.css';
import '../../css/g/gm3lalblg.css';
import '../../css/o/ousiqgb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7p__wdjy"/><path class="df84tibzk"/><path class="gm3lalblg"/><path class="ousiqgb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bed"} {...others} />);
}

export default Component;
