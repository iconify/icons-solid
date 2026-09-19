import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qur1wlvih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qur1wlvih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:form-checkmark"} {...others} />);
}

export default Component;
