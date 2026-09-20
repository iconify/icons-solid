import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7quqgbjv.css';
import '../../css/s/s1tnk0x5i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y7quqgbjv"/><path class="s1tnk0x5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-book-library"} {...others} />);
}

export default Component;
