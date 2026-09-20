import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4zjbgbjz.css';
import '../../css/i/i7fuergcy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4zjbgbjz"/><path class="i7fuergcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-clock"} {...others} />);
}

export default Component;
