import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svy-d9glg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svy-d9glg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:shopping-cart-02"} {...others} />);
}

export default Component;
