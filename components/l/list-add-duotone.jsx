import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8cfgjbhe.css';
import '../../css/b/b6b-u_35t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8cfgjbhe"/><path class="b6b-u_35t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:list-add-duotone"} {...others} />);
}

export default Component;
