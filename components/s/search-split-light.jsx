import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d01g2lbqs.css';
import '../../css/i/ijt9r4b8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d01g2lbqs"/><path class="ijt9r4b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-split-light"} {...others} />);
}

export default Component;
