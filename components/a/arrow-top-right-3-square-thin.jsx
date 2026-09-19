import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak46xro0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ak46xro0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-top-right-3-square-thin"} {...others} />);
}

export default Component;
