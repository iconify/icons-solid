import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4yy3nb0m.css';
import '../../css/h/hxpwx2jys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4yy3nb0m"/><path class="hxpwx2jys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-pie"} {...others} />);
}

export default Component;
