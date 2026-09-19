import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewe25tbub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewe25tbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-left-3-square-thin"} {...others} />);
}

export default Component;
