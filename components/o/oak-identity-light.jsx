import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru6sgpi9r.css';
import '../../css/a/aunmnqb4l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ru6sgpi9r"/><path class="aunmnqb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oak-identity-light"} {...others} />);
}

export default Component;
