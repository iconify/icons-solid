import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccc8p6bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccc8p6bbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:drill-check"} {...others} />);
}

export default Component;
