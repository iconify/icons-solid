import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oum_zll5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oum_zll5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:taxiing-line"} {...others} />);
}

export default Component;
