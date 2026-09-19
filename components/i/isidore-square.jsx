import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fst_4tbgv.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="fst_4tbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:isidore-square"} {...others} />);
}

export default Component;
