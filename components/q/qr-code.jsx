import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiyr-ntec.css';
import '../../css/w/wp8qz4bad.css';
import '../../css/b/bqapg30rg.css';
import '../../css/h/hny4-63og.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kiyr-ntec"/><path class="wp8qz4bad"/><path class="bqapg30rg"/><path class="hny4-63og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:qr-code"} {...others} />);
}

export default Component;
