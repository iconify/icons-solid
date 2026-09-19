import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfk5y9bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tfk5y9bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:check-circle-filled"} {...others} />);
}

export default Component;
