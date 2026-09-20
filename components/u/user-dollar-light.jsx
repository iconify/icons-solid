import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c46s_0bco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c46s_0bco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-dollar-light"} {...others} />);
}

export default Component;
