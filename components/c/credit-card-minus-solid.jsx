import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypqjqacjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ypqjqacjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:credit-card-minus-solid"} {...others} />);
}

export default Component;
