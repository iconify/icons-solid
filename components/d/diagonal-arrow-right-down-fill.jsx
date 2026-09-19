import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1gsigb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1gsigb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:diagonal-arrow-right-down-fill"} {...others} />);
}

export default Component;
