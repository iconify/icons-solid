import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xax6l7bwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xax6l7bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:adobe-lightroom-solid"} {...others} />);
}

export default Component;
