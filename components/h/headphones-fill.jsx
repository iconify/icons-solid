import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7z0rxbit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7z0rxbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:headphones-fill"} {...others} />);
}

export default Component;
