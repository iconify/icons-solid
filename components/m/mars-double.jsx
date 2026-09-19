import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyo01_bzg.css';

const viewBox = {"width":1920,"height":1792};
const content = `<path class="hyo01_bzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:mars-double"} {...others} />);
}

export default Component;
