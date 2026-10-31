import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzumm9f2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzumm9f2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:taxi-gloss"} {...others} />);
}

export default Component;
