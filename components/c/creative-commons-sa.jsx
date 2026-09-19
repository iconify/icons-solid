import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o03oq3bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o03oq3bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:creative-commons-sa"} {...others} />);
}

export default Component;
