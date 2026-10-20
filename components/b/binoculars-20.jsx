import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajktiebca.css';
import '../../css/y/yox6r2bku.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajktiebca"/><path class="yox6r2bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:binoculars-20"} {...others} />);
}

export default Component;
