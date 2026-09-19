import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x04vd8uuy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x04vd8uuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-up-left-circle-fill"} {...others} />);
}

export default Component;
