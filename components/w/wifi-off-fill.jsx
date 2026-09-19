import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duuf9m24f.css';
import '../../css/h/h8p6cfbln.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="duuf9m24f"/><path class="h8p6cfbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:wifi-off-fill"} {...others} />);
}

export default Component;
