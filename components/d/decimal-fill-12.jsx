import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go9655bbx.css';
import '../../css/y/yqefc5upf.css';

const viewBox = {"width":12,"height":12};
const content = `<ellipse class="go9655bbx"/><circle class="yqefc5upf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:decimal-fill-12"} {...others} />);
}

export default Component;
