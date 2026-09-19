import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icwdcg1df.css';

const viewBox = {"width":1920,"height":1664};
const content = `<path class="icwdcg1df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:camera"} {...others} />);
}

export default Component;
