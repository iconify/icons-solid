import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h49eobbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h49eobbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:crop"} {...others} />);
}

export default Component;
