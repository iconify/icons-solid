import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi8b0f.css';
import '../../css/s/so-from-30.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yi8b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:heart"} {...others} />);
}

export default Component;
