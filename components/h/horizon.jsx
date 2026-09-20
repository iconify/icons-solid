import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj4zbobbq.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="uj4zbobbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:horizon"} {...others} />);
}

export default Component;
