import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/criho_qpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="criho_qpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:solidity"} {...others} />);
}

export default Component;
