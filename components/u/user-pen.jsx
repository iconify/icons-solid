import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_czpwkxx.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/y/ymb10gb6t.css';
import '../../css/a/apse0o7pc.css';
import '../../css/a/ampzbnbho.css';
import '../../css/b/bei967bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k y_czpwkxx"/><path class="mcj8uxbod wm-k"/><path class="wm-s ymb10gb6t"/><path class="apse0o7pc wm-s"/><path class="ampzbnbho wm-s"/><path class="bei967bcz wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:user-pen"} {...others} />);
}

export default Component;
