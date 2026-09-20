import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzwc3f7as.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzwc3f7as"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:composetoolbox-dark"} {...others} />);
}

export default Component;
