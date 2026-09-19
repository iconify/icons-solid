import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccdiidbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccdiidbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:link-external-bold"} {...others} />);
}

export default Component;
