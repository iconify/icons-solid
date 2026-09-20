import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym_0hibad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ym_0hibad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:book-shelf-fill"} {...others} />);
}

export default Component;
