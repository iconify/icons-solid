import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocj5ybcgv.css';
import '../../css/f/fhz4q76lt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocj5ybcgv"/><path class="fhz4q76lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:allowances-no-photos-bold"} {...others} />);
}

export default Component;
