import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2zfnvgut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2zfnvgut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:resilient-and-migration-sensitive-health-system-24px"} {...others} />);
}

export default Component;
