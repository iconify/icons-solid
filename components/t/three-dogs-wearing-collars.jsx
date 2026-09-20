import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb9hgyngx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gb9hgyngx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-dogs-wearing-collars"} {...others} />);
}

export default Component;
