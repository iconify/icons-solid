import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsa2r967w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nsa2r967w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:amazonlumberyard"} {...others} />);
}

export default Component;
