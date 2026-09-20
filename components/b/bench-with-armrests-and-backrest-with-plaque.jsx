import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmnv41bnv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jmnv41bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bench-with-armrests-and-backrest-with-plaque"} {...others} />);
}

export default Component;
