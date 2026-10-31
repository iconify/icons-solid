import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nehmr7u7k.css';
import '../../css/d/d1xosacnr.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nehmr7u7k"/><path class="d1xosacnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:maltese-cross"} {...others} />);
}

export default Component;
