import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgpeqgbme.css';
import '../../css/b/bsih12bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgpeqgbme"/><path class="bsih12bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cursor-arrow-duotone"} {...others} />);
}

export default Component;
