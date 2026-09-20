import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlqqbzuhn.css';
import '../../css/b/b_4q_nb6f.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="mlqqbzuhn"/><path class="b_4q_nb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:danger"} {...others} />);
}

export default Component;
