import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akzk_xbgp.css';
import '../../css/l/lp8u00bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akzk_xbgp"/><path clip-rule="evenodd" class="lp8u00bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-round-bold"} {...others} />);
}

export default Component;
