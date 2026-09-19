import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmu3bk6pi.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/p/p9_kcjbci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmu3bk6pi"/><path class="bwibdw4bb"/><path class="p9_kcjbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:angry"} {...others} />);
}

export default Component;
