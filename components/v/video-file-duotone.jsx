import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9h3i4b2f.css';
import '../../css/a/a7grcu7de.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a9h3i4b2f"/><path class="a7grcu7de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:video-file-duotone"} {...others} />);
}

export default Component;
