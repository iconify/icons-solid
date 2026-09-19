import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d57sztm3t.css';
import '../../css/z/z5b9-nbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d57sztm3t"/><path class="z5b9-nbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-exclude"} {...others} />);
}

export default Component;
