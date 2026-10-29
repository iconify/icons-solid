import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjt35jbax.css';
import '../../css/y/yxau7pbyd.css';
import '../../css/r/rxw8qqb8r.css';
import '../../css/z/z1_2frnfd.css';
import '../../css/c/cnr0szbap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xjt35jbax"/><path class="wm-k yxau7pbyd"/><path class="rxw8qqb8r wm-k"/><path class="wm-a z1_2frnfd"/><path class="cnr0szbap wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevrons-right"} {...others} />);
}

export default Component;
