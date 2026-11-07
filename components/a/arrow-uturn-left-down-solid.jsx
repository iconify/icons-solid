import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibohz8bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ibohz8bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-uturn-left-down-solid"} {...others} />);
}

export default Component;
