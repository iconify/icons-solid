import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3gl-5byj.css';
import '../../css/a/aepino0ac.css';
import '../../css/g/go-_ugbik.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q3gl-5byj"/><path class="aepino0ac"/><path class="go-_ugbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bruno"} {...others} />);
}

export default Component;
