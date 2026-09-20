import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk40d6bba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nk40d6bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-alpha-alt-up"} {...others} />);
}

export default Component;
