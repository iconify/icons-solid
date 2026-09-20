import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgjhy3bjh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hgjhy3bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-catergories-baby-botlle-bottle-milk-family-children-formula-care-child-kid-baby"} {...others} />);
}

export default Component;
