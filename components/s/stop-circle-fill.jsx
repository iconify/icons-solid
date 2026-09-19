import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gglhxpbss.css';
import '../../css/j/jmec2jscz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gglhxpbss"/><path class="jmec2jscz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:stop-circle-fill"} {...others} />);
}

export default Component;
