import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu-d01bjj.css';
import '../../css/n/nm2dxfjpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mu-d01bjj"/><path class="nm2dxfjpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:phone-out-solid"} {...others} />);
}

export default Component;
