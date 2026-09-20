import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exaqg9f9e.css';
import '../../css/j/joioafbdy.css';

const viewBox = {"width":300,"height":300};
const content = `<path paint-order="fill markers stroke" class="exaqg9f9e"/><path class="joioafbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:velocity"} {...others} />);
}

export default Component;
