import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-l-pb8zd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-l-pb8zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:align-horizontal-center"} {...others} />);
}

export default Component;
