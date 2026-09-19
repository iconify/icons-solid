import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hocb8ccfl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hocb8ccfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:checkmark"} {...others} />);
}

export default Component;
