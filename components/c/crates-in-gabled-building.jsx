import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0z-jlbjf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a0z-jlbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:crates-in-gabled-building"} {...others} />);
}

export default Component;
