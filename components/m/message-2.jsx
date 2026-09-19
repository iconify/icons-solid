import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjsseubff.css';
import '../../css/p/p9m7uqziz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer pjsseubff"/><path class="duoicon-primary-layer p9m7uqziz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:message-2"} {...others} />);
}

export default Component;
