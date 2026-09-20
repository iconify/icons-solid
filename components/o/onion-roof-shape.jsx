import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttp7_shbm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ttp7_shbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:onion-roof-shape"} {...others} />);
}

export default Component;
