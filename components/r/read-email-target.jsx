import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew0ia5buq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ew0ia5buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:read-email-target"} {...others} />);
}

export default Component;
