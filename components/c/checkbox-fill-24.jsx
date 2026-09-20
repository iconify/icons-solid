import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kogph_qlv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kogph_qlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:checkbox-fill-24"} {...others} />);
}

export default Component;
