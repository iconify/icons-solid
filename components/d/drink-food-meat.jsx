import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghnaq34ib.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ghnaq34ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:drink-food-meat"} {...others} />);
}

export default Component;
