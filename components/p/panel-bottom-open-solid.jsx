import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/errca7bxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="errca7bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-bottom-open-solid"} {...others} />);
}

export default Component;
