import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqt9i-bxr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cqt9i-bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-down-to-down-bracket"} {...others} />);
}

export default Component;
