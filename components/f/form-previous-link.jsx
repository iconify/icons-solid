import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdp5r-bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdp5r-bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:form-previous-link"} {...others} />);
}

export default Component;
