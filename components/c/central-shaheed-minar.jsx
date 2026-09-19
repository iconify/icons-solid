import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx0fi0t2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gx0fi0t2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:central-shaheed-minar"} {...others} />);
}

export default Component;
