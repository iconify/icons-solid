import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo-9dz_1v.css';

const viewBox = {"width":640,"height":1024};
const content = `<path class="oo-9dz_1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fridge"} {...others} />);
}

export default Component;
