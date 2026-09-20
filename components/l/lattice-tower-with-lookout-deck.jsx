import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ectx9jbem.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ectx9jbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lattice-tower-with-lookout-deck"} {...others} />);
}

export default Component;
