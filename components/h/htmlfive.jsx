import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgxn-yw5o.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="hgxn-yw5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:htmlfive"} {...others} />);
}

export default Component;
