import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoy6vkbrs.css';
import '../../css/b/bpq3sbcle.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoy6vkbrs"/><path class="bpq3sbcle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-select-multiple"} {...others} />);
}

export default Component;
