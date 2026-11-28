import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2-ckur5p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c2-ckur5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:question-mark-in-vending-machine"} {...others} />);
}

export default Component;
