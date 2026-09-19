import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roe0f7pai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="roe0f7pai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:git-cherry-pick-commit"} {...others} />);
}

export default Component;
