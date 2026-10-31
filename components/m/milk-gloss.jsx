import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo2z8_zoi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zo2z8_zoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:milk-gloss"} {...others} />);
}

export default Component;
