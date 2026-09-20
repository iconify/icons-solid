import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_4rf8b5k.css';
import '../../css/y/yctwq2t0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_4rf8b5k"/><path class="yctwq2t0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:espiral-book-light"} {...others} />);
}

export default Component;
