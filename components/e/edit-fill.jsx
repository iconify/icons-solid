import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noj_8dt1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="noj_8dt1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:edit-fill"} {...others} />);
}

export default Component;
