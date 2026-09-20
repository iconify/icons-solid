import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr5jt2bje.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="wr5jt2bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:checkbox-cross"} {...others} />);
}

export default Component;
