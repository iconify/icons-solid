import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyl5gmbif.css';
import '../../css/f/f5bhpxvdn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gyl5gmbif"/><path class="f5bhpxvdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:entityframeworkcore"} {...others} />);
}

export default Component;
