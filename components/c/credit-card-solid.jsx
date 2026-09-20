import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-d5ipbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-d5ipbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:credit-card-solid"} {...others} />);
}

export default Component;
