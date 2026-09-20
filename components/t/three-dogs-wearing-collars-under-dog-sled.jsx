import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmneqac1s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pmneqac1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-dogs-wearing-collars-under-dog-sled"} {...others} />);
}

export default Component;
