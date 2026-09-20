import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gllpr_1-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gllpr_1-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-outline"} {...others} />);
}

export default Component;
