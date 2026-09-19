import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/semkcey0p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="semkcey0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cart-x-fill"} {...others} />);
}

export default Component;
