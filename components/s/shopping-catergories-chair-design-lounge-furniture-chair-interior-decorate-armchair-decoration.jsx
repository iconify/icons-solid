import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoa_vzbef.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="uoa_vzbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-catergories-chair-design-lounge-furniture-chair-interior-decorate-armchair-decoration"} {...others} />);
}

export default Component;
