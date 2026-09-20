import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjt07rb4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yjt07rb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hammer-editor-dark"} {...others} />);
}

export default Component;
