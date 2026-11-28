import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muzy7pqmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muzy7pqmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:external-link-solid"} {...others} />);
}

export default Component;
