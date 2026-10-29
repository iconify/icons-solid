import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m267nrnme.css';
import '../../css/b/b7kihabsw.css';
import '../../css/m/mjew-dblb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m267nrnme wm-shadow"/><path class="b7kihabsw wm-k"/><path class="mjew-dblb wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:more-vertical"} {...others} />);
}

export default Component;
