import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2kge9byn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2kge9byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bookmark-slash-solid"} {...others} />);
}

export default Component;
