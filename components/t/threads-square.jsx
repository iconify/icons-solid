import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh7tywstp.css';
import '../../css/s/szy8zrbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGngv3Lbdb" class="mh7tywstp"/></defs><use href="#SVGngv3Lbdb"/><path class="szy8zrbsp"/><use href="#SVGngv3Lbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:threads-square"} {...others} />);
}

export default Component;
