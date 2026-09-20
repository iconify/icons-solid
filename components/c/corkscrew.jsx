import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw47y_bak.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yw47y_bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:corkscrew"} {...others} />);
}

export default Component;
