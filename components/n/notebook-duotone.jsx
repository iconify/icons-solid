import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lczir7byp.css';
import '../../css/u/umplx46gh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lczir7byp"/><path class="umplx46gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:notebook-duotone"} {...others} />);
}

export default Component;
