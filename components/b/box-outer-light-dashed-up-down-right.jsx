import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ick21ib3p.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ick21ib3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-dashed-up-down-right"} {...others} />);
}

export default Component;
