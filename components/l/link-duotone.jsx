import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfx4sq3sa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfx4sq3sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:link-duotone"} {...others} />);
}

export default Component;
