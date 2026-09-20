import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7ae6vn1y.css';
import '../../css/h/h53yl6f8n.css';
import '../../css/j/jdgizublx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j7ae6vn1y"/><path class="h53yl6f8n"/><path class="jdgizublx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nakama"} {...others} />);
}

export default Component;
