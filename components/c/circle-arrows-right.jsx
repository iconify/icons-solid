import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyw5h7vrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vyw5h7vrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-arrows-right"} {...others} />);
}

export default Component;
