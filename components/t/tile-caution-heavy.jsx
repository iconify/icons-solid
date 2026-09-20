import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fza5vnbmg.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="fza5vnbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tile-caution-heavy"} {...others} />);
}

export default Component;
