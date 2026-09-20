import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddkpy6xif.css';
import '../../css/k/kxukhz28t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ddkpy6xif"/><path class="kxukhz28t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xpr"} {...others} />);
}

export default Component;
