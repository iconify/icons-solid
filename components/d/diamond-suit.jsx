import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm6m-bc7r.css';
import '../../css/k/kwze97erm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lm6m-bc7r"/><path class="kwze97erm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:diamond-suit"} {...others} />);
}

export default Component;
