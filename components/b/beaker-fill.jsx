import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-5bbojyt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w-5bbojyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:beaker-fill"} {...others} />);
}

export default Component;
