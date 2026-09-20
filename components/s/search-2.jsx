import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nns0k0bcj.css';
import '../../css/g/g7mt9ybuw.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="nns0k0bcj"/><path clip-rule="evenodd" class="g7mt9ybuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:search-2"} {...others} />);
}

export default Component;
