import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaa10iz8w.css';
import '../../css/i/is07s5r9m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iaa10iz8w"/><path class="is07s5r9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:sliders-twotone"} {...others} />);
}

export default Component;
