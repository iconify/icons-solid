import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy6ak9tth.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gy6ak9tth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:vending-machine-with-shelves"} {...others} />);
}

export default Component;
