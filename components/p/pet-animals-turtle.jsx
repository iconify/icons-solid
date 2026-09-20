import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjmg4z__o.css';
import '../../css/d/d1jue8bvv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sjmg4z__o"/><path class="d1jue8bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:pet-animals-turtle"} {...others} />);
}

export default Component;
