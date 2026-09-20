import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irduc8btt.css';
import '../../css/z/z1s3debyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irduc8btt"/><path class="z1s3debyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:jup"} {...others} />);
}

export default Component;
