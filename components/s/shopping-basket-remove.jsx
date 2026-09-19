import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bic_6imzx.css';

const viewBox = {"width":31,"height":24};
const content = `<path class="bic_6imzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:shopping-basket-remove"} {...others} />);
}

export default Component;
