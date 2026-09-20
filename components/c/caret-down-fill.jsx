import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcq6a4frh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcq6a4frh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:caret-down-fill"} {...others} />);
}

export default Component;
