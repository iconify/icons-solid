import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob6w07hra.css';
import '../../css/w/webixmbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob6w07hra"/><path clip-rule="evenodd" class="webixmbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hst"} {...others} />);
}

export default Component;
