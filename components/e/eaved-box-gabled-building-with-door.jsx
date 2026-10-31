import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dky4xzbaf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dky4xzbaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-box-gabled-building-with-door"} {...others} />);
}

export default Component;
