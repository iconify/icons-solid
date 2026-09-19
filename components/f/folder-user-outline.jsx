import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm3zlkn7f.css';
import '../../css/s/sz_qvhbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mm3zlkn7f"/><path class="sz_qvhbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-user-outline"} {...others} />);
}

export default Component;
