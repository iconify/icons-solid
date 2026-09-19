import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl0y2rbzz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gl0y2rbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:text-indent-left"} {...others} />);
}

export default Component;
