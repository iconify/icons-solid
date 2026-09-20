import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkvn_37ux.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pkvn_37ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:misskey-dark"} {...others} />);
}

export default Component;
