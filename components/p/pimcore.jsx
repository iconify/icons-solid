import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihkv5i5wa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ihkv5i5wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pimcore"} {...others} />);
}

export default Component;
