import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf7fidc9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf7fidc9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:backpack-check"} {...others} />);
}

export default Component;
