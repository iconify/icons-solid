import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnk9c6m_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnk9c6m_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shopping-cart-plus"} {...others} />);
}

export default Component;
