import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0hp6jb5d.css';
import '../../css/h/hzx-5b09c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c0hp6jb5d"/><path class="hzx-5b09c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:tablet-light"} {...others} />);
}

export default Component;
