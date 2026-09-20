import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8vaz6bvv.css';
import '../../css/p/pn6ejhb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8vaz6bvv"/><path class="pn6ejhb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:discount-filled"} {...others} />);
}

export default Component;
