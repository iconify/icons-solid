import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djv6i7b0m.css';
import '../../css/x/x7x-ecccf.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="djv6i7b0m"/><path class="x7x-ecccf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:hotel"} {...others} />);
}

export default Component;
