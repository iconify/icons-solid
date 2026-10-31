import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvmk2esxq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tvmk2esxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-gabled-building-with-fireplace-and-chimney"} {...others} />);
}

export default Component;
