import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm-2r_bee.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hm-2r_bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-right-up"} {...others} />);
}

export default Component;
