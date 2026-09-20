import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd3noewjg.css';

const viewBox = {"width":51.89,"height":64,"left":4.66,"top":-1.4};
const content = `<path class="wd3noewjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nagios"} {...others} />);
}

export default Component;
