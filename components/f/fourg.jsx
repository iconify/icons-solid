import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-f2qv2rw.css';

const viewBox = {"width":1025,"height":832};
const content = `<path class="d-f2qv2rw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fourg"} {...others} />);
}

export default Component;
