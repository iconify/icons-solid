import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4ctvfujo.css';
import '../../css/q/q00bcy-qc.css';
import '../../css/j/jv2czo-4r.css';
import '../../css/z/z8onmlb3e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m4ctvfujo"/><path class="q00bcy-qc"/><path class="jv2czo-4r"/><path class="z8onmlb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-close-book-bookmark"} {...others} />);
}

export default Component;
