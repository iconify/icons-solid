import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubr1w8-yo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ubr1w8-yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:globe"} {...others} />);
}

export default Component;
