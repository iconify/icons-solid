import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgpgm4bxi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rgpgm4bxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:speaker-deck"} {...others} />);
}

export default Component;
