import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i39jc5b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i39jc5b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:user-circle-check"} {...others} />);
}

export default Component;
