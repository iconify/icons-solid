import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4cnmn_xu.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG2Ib8ObKe" class="h4cnmn_xu"/></defs><use href="#SVG2Ib8ObKe"/><use href="#SVG2Ib8ObKe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:proteo"} {...others} />);
}

export default Component;
