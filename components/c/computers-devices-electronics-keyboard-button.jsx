import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs_t-dgjs.css';
import '../../css/b/b_zpflbco.css';
import '../../css/g/gt8ehhy9i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fs_t-dgjs"/><path class="b_zpflbco"/><path class="gt8ehhy9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-keyboard-button"} {...others} />);
}

export default Component;
