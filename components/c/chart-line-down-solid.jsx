import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_tky7bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t_tky7bfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:chart-line-down-solid"} {...others} />);
}

export default Component;
