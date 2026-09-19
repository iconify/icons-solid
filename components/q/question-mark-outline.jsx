import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6y_ocbap.css';
import '../../css/d/duuf9m24f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6y_ocbap"/><circle class="duuf9m24f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:question-mark-outline"} {...others} />);
}

export default Component;
