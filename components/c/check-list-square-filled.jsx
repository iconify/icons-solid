import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0_z9mbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n0_z9mbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:check-list-square-filled"} {...others} />);
}

export default Component;
