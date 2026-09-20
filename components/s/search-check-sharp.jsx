import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytr8o7b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytr8o7b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-check-sharp"} {...others} />);
}

export default Component;
