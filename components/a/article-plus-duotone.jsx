import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suohx5bzk.css';
import '../../css/q/qb-wvabvh.css';
import '../../css/t/tdqb12byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suohx5bzk"/><path class="qb-wvabvh"/><path class="tdqb12byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-plus-duotone"} {...others} />);
}

export default Component;
