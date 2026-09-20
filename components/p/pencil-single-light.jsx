import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8f7hrbpl.css';
import '../../css/u/u9i0xe_nk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8f7hrbpl"/><path clip-rule="evenodd" class="u9i0xe_nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pencil-single-light"} {...others} />);
}

export default Component;
