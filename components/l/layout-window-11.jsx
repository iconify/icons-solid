import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpz2ktj_f.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vpz2ktj_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:layout-window-11"} {...others} />);
}

export default Component;
