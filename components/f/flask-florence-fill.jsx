import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waq_d7rbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="waq_d7rbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:flask-florence-fill"} {...others} />);
}

export default Component;
