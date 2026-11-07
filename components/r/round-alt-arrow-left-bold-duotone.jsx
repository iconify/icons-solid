import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu-cc3sah.css';
import '../../css/h/h026ozlsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wu-cc3sah"/><path class="h026ozlsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-alt-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
