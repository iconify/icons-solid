import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsayo-blv.css';
import '../../css/c/c7ebenbdm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wsayo-blv"/><path class="c7ebenbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flarum-light"} {...others} />);
}

export default Component;
