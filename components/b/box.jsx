import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffhh3qb8v.css';
import '../../css/s/sfre7fbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ffhh3qb8v"/><path class="sfre7fbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:box"} {...others} />);
}

export default Component;
