import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6psufbgn.css';
import '../../css/c/ck6gfpkya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6psufbgn"/><path class="ck6gfpkya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pai"} {...others} />);
}

export default Component;
