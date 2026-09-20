import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1ho5lb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1ho5lb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-amazon"} {...others} />);
}

export default Component;
