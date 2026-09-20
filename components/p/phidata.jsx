import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx9x8pb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sx9x8pb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:phidata"} {...others} />);
}

export default Component;
