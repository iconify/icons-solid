import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef7-wtbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ef7-wtbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:star-half-solid"} {...others} />);
}

export default Component;
