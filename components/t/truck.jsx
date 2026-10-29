import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgpsrnbfm.css';
import '../../css/y/yk4t6hbev.css';
import '../../css/v/vbnjso36t.css';
import '../../css/b/b34a8ub5s.css';
import '../../css/v/v64hmgx5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgpsrnbfm wm-k"/><path class="wm-k yk4t6hbev"/><path class="vbnjso36t wm-k"/><path class="b34a8ub5s wm-a"/><path class="v64hmgx5r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:truck"} {...others} />);
}

export default Component;
