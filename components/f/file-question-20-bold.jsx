import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq8br0b3r.css';
import '../../css/s/sqlb-4bxv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bq8br0b3r"/><path class="sqlb-4bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-question-20-bold"} {...others} />);
}

export default Component;
