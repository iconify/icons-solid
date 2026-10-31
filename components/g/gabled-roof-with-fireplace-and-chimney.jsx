import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx6p4trgt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lx6p4trgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gabled-roof-with-fireplace-and-chimney"} {...others} />);
}

export default Component;
