import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho4bgebya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ho4bgebya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-vertical-distribute-start-sharp"} {...others} />);
}

export default Component;
