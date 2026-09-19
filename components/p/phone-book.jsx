import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv8augtve.css';
import '../../css/z/z1i2occ_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv8augtve"/><path class="z1i2occ_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:phone-book"} {...others} />);
}

export default Component;
