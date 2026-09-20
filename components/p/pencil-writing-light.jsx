import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohmadlugj.css';
import '../../css/h/h89cyrqhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohmadlugj"/><path class="h89cyrqhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pencil-writing-light"} {...others} />);
}

export default Component;
