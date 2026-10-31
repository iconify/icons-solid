import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjgp20b1y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pjgp20b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-gabled-building-with-chimney"} {...others} />);
}

export default Component;
