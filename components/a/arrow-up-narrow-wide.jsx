import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfbxiibek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfbxiibek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrow-up-narrow-wide"} {...others} />);
}

export default Component;
