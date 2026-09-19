import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d14e_qb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d14e_qb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:horizontal-distribute-right"} {...others} />);
}

export default Component;
