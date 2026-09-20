import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eobcxt-xa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eobcxt-xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-2-outline"} {...others} />);
}

export default Component;
