import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmbolmbel.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gmbolmbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-beside-person-sleeping-in-bed"} {...others} />);
}

export default Component;
