import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t78rjtomt.css';
import '../../css/h/hn34necwq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t78rjtomt"/><path class="hn34necwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:css"} {...others} />);
}

export default Component;
