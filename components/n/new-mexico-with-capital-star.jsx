import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msj6vhb3f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="msj6vhb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:new-mexico-with-capital-star"} {...others} />);
}

export default Component;
