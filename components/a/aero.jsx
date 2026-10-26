import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hefuzsyto.css';
import '../../css/h/hy2durjjx.css';
import '../../css/y/y3v2sl6-y.css';

const viewBox = {"width":51.74,"height":70};
const content = `<path class="hefuzsyto"/><path class="hy2durjjx"/><path class="y3v2sl6-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:aero"} {...others} />);
}

export default Component;
