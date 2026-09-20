import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwy_4lplo.css';
import '../../css/n/n2zz0dpiu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dwy_4lplo"/><ellipse class="n2zz0dpiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:tag"} {...others} />);
}

export default Component;
