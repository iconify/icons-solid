import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqnf4kbgb.css';
import '../../css/g/gxm3dk91i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqnf4kbgb"/><path class="gxm3dk91i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-cart-upload-bold"} {...others} />);
}

export default Component;
