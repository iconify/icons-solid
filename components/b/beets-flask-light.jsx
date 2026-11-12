import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-8zeib9o.css';
import '../../css/g/gncr9mbaq.css';
import '../../css/s/s8i3jsm2k.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="v-8zeib9o"/><path class="gncr9mbaq"/><path class="s8i3jsm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beets-flask-light"} {...others} />);
}

export default Component;
