import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhscw0hrm.css';
import '../../css/k/k0dg-7b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhscw0hrm"/><path class="k0dg-7b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:blast"} {...others} />);
}

export default Component;
