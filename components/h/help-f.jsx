import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr_vn-bin.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<path class="pr_vn-bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:help-f"} {...others} />);
}

export default Component;
