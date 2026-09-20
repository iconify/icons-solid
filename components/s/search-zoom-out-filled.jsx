import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d13crfb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d13crfb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:search-zoom-out-filled"} {...others} />);
}

export default Component;
