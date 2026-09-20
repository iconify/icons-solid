import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2gx3t1mk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o2gx3t1mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:infinite-filled"} {...others} />);
}

export default Component;
