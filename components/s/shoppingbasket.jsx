import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uml9d-m-j.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="uml9d-m-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:shoppingbasket"} {...others} />);
}

export default Component;
