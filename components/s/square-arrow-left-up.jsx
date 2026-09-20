import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x30s24-dv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x30s24-dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrow-left-up"} {...others} />);
}

export default Component;
