import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be2pofbgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be2pofbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:food-variant"} {...others} />);
}

export default Component;
