import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2yxnrbti.css';
import '../../css/s/suyzx0beu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m2yxnrbti"/><path class="suyzx0beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tag-20"} {...others} />);
}

export default Component;
