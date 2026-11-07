import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zppc8rbit.css';
import '../../css/f/fmy-1sbhx.css';
import '../../css/o/otzgm8e6s.css';
import '../../css/c/c4oqwbcar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zppc8rbit"/><path class="fmy-1sbhx"/><path class="otzgm8e6s"/><path class="c4oqwbcar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skirt-bold"} {...others} />);
}

export default Component;
