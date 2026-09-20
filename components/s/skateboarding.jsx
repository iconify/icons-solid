import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy-bghb3k.css';
import '../../css/v/v8a8hebya.css';

const viewBox = {"width":50,"height":50};
const content = `<ellipse class="sy-bghb3k"/><path class="v8a8hebya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:skateboarding"} {...others} />);
}

export default Component;
