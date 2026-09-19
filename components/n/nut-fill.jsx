import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir9eex94f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ir9eex94f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:nut-fill"} {...others} />);
}

export default Component;
