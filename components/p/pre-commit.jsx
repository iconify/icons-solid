import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukg496alp.css';
import '../../css/m/m2xavebym.css';

const viewBox = {"width":16,"height":16};
const content = `<rect transform="rotate(-45)" class="ukg496alp"/><path class="m2xavebym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:pre-commit"} {...others} />);
}

export default Component;
