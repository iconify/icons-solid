import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alill9eow.css';
import '../../css/a/a4jsaxbri.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="alill9eow"/><path class="a4jsaxbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:file-user-solid"} {...others} />);
}

export default Component;
