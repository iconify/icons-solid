import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my5n0s3xg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="my5n0s3xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:interface-definition-alt"} {...others} />);
}

export default Component;
