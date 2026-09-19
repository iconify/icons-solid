import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckg3ubbyx.css';
import '../../css/g/gcn7qhbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckg3ubbyx"/><path clip-rule="evenodd" class="gcn7qhbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:comment-block-outline"} {...others} />);
}

export default Component;
