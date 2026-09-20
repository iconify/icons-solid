import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oql7-e3yp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oql7-e3yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:firefly-iii"} {...others} />);
}

export default Component;
