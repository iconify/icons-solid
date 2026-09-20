import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/scllpbenl.css';
import '../../css/s/shm300b9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="scllpbenl"/><path class="shm300b9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tag-user"} {...others} />);
}

export default Component;
