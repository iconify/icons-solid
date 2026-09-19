import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqzzpjbmd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lqzzpjbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:capslock-fill"} {...others} />);
}

export default Component;
