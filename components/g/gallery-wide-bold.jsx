import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpj8th5qt.css';
import '../../css/t/tev9i0bxp.css';
import '../../css/j/j9_7gjbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zpj8th5qt"/><path clip-rule="evenodd" class="tev9i0bxp"/><path class="j9_7gjbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-wide-bold"} {...others} />);
}

export default Component;
