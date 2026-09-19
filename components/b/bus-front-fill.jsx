import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8e9ro_ra.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h8e9ro_ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bus-front-fill"} {...others} />);
}

export default Component;
