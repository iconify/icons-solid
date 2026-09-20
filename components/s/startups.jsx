import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evfd4hbar.css';
import '../../css/l/lt9r55aoa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evfd4hbar"/><path class="lt9r55aoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:startups"} {...others} />);
}

export default Component;
