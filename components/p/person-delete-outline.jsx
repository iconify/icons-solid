import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oad7-688o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oad7-688o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:person-delete-outline"} {...others} />);
}

export default Component;
