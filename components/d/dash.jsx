import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccn1z2r6p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ccn1z2r6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dash"} {...others} />);
}

export default Component;
