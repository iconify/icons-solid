import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dat_fiu7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dat_fiu7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:apps-off"} {...others} />);
}

export default Component;
