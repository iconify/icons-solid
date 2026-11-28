import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbp5g-0ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbp5g-0ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:store-clock"} {...others} />);
}

export default Component;
