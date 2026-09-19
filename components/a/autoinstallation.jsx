import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lell8f7di.css';
import '../../css/t/tvlrzedqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lell8f7di"/><path class="tvlrzedqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:autoinstallation"} {...others} />);
}

export default Component;
