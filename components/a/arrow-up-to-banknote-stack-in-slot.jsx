import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqej7pdcn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eqej7pdcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-up-to-banknote-stack-in-slot"} {...others} />);
}

export default Component;
