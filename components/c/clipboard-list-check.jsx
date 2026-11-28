import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx1b5ql4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx1b5ql4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:clipboard-list-check"} {...others} />);
}

export default Component;
