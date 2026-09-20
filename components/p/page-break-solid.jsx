import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7u9cyb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u7u9cyb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:page-break-solid"} {...others} />);
}

export default Component;
