import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzly_lbpi.css';
import '../../css/u/uh68dtbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzly_lbpi"/><path class="uh68dtbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:steam"} {...others} />);
}

export default Component;
