import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esg-30b0c.css';
import '../../css/e/e6yhmq1dy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esg-30b0c"/><path class="e6yhmq1dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-shield-duotone"} {...others} />);
}

export default Component;
