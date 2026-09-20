import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4cr97bxw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z4cr97bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hairy-caterpillar-and-exclamation-point"} {...others} />);
}

export default Component;
