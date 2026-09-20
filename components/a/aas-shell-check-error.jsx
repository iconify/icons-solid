import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvypm0e2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvypm0e2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:aas-shell-check-error"} {...others} />);
}

export default Component;
