import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2tbqbb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2tbqbb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-hierarchy-1"} {...others} />);
}

export default Component;
