import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6h8cybhv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o6h8cybhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:table-with-umbrella"} {...others} />);
}

export default Component;
