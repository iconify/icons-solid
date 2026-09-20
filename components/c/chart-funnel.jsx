import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-sbfr54f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-sbfr54f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-funnel"} {...others} />);
}

export default Component;
