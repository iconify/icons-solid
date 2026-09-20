import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9n_yslph.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="v9n_yslph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-dashed-down-left-right"} {...others} />);
}

export default Component;
