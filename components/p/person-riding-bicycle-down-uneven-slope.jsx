import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_12uccoh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e_12uccoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-riding-bicycle-down-uneven-slope"} {...others} />);
}

export default Component;
