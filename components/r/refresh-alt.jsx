import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ityqu6bxt.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="ityqu6bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:refresh-alt"} {...others} />);
}

export default Component;
