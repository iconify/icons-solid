import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn5yx0u5x.css';
import '../../css/j/jj9yknbgz.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="gn5yx0u5x"/><path class="jj9yknbgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:trophy"} {...others} />);
}

export default Component;
