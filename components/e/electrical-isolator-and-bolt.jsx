import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm23xgb9z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rm23xgb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:electrical-isolator-and-bolt"} {...others} />);
}

export default Component;
