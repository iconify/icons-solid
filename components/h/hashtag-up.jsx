import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/km205tb8l.css';
import '../../css/g/g40w6uq8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="km205tb8l"/><path class="g40w6uq8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hashtag-up"} {...others} />);
}

export default Component;
