import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvpm8dayr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xvpm8dayr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:definition-search-book"} {...others} />);
}

export default Component;
