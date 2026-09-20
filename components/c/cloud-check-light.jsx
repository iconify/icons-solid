import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_ezh736y.css';
import '../../css/w/wtxugid0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_ezh736y"/><path class="wtxugid0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cloud-check-light"} {...others} />);
}

export default Component;
