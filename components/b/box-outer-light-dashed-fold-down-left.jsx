import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4ds2m-5f.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="r4ds2m-5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-dashed-fold-down-left"} {...others} />);
}

export default Component;
