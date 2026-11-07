import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu-cc3sah.css';
import '../../css/o/oei2zdbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wu-cc3sah"/><path class="oei2zdbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-arrow-left-up-bold-duotone"} {...others} />);
}

export default Component;
