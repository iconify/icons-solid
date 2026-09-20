import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh3invhhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xh3invhhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:animal-products-egg"} {...others} />);
}

export default Component;
