import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa_i0o2ff.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};
const content = `<path class="aa_i0o2ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:map-marker"} {...others} />);
}

export default Component;
