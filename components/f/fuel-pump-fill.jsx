import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5ahj8bxy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g5ahj8bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:fuel-pump-fill"} {...others} />);
}

export default Component;
