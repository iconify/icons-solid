import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmeeo747i.css';
import '../../css/b/bzqhk4t2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmeeo747i"/><path class="bzqhk4t2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-cross-fill"} {...others} />);
}

export default Component;
