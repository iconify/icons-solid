import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq34xdb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq34xdb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:share-nodes-solid"} {...others} />);
}

export default Component;
