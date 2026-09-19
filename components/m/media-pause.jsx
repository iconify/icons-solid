import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqxr509tf.css';
import '../../css/s/soiwzo-nm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="dqxr509tf"/><rect class="soiwzo-nm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:media-pause"} {...others} />);
}

export default Component;
