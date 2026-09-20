import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okwossb3c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="okwossb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless"} {...others} />);
}

export default Component;
