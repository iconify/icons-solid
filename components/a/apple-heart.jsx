import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj9x2t-hb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uj9x2t-hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:apple-heart"} {...others} />);
}

export default Component;
