import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrn6fsfft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrn6fsfft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ship-wheel"} {...others} />);
}

export default Component;
