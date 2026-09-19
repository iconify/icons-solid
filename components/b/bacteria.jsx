import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2nvl-0be.css';
import '../../css/l/lt7jyeb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2nvl-0be"/><path class="lt7jyeb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bacteria"} {...others} />);
}

export default Component;
