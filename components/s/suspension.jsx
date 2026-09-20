import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s86v7ljxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s86v7ljxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suspension"} {...others} />);
}

export default Component;
